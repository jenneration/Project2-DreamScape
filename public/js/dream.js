
document.addEventListener("DOMContentLoaded", (e) => {
  if (e) {
    console.log("DOM loaded");
  }

  //Get references to html elements
  let titleInput = document.getElementById("title");
  let tagsInput = document.getElementById("tags");
  let descriptionInput = document.getElementById("description");

  const btnRead = document.querySelectorAll("#btn-read");

  // #3 READ: get one dream by ID
  if (btnRead) {
    btnRead.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("CLICK");

        let id = e.target.getAttribute("data-dream");
        console.log(id);

        fetch(`/api/read/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(response);
            window.location = `/api/read/${id}`;
          })
          .catch((error) => console.log(error));
      });
    });
  }

  // #4 Redirect to edit/delete page
  const btnEdit = document.querySelector("#btn-edit");

  if (btnEdit) {
    btnEdit.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("CLICK");
      console.log(e);

      let id = e.target.getAttribute("data-dream");
      console.log(id);

      fetch(`/api/edit/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response);
          window.location.href = `/api/edit/${id}`;
        })
        .catch((error) => console.log(error));
    });
  };


  // # UPDATE
  const btnUpdate = document.querySelector("#btn-update");

  const updateDream = (currentDream, id) => {
    fetch(`/api/dreams/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": " application/json",
      },
      body: JSON.stringify(currentDream),
    }).then((response) => console.log(response));
  };

  btnUpdate.addEventListener("click", (e) => {
    e.preventDefault();
    const currentDream = {
      title: titleInput.value.trim(),
      tags: tagsInput.value.trim(),
      description: descriptionInput.value.trim(),
    };
    console.log(currentDream);
    let id = e.target.getAttribute("data-dream")
    updateDream(currentDream, id)
  });


  // #6 DELETE
  const deleteBtn = document.querySelector("#btn-delete")
  const deleteDream = (id) => {

    console.log("dataset.dream");
    fetch(`/api/dreams/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => console.log("DELETED"));
  };


  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.target.getAttribute("data-dream")
    deleteDream(id);
  });


});


