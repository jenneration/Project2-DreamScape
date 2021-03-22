module.exports = (sequelize, DataTypes) => {

  const Dreams = sequelize.define("Dreams", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //len: [1],
      },
    },
    description: {
      type: DataTypes.TEXT
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Dreams;
};
