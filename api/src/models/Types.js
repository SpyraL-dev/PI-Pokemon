const { Sequelize, DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
 return sequelize.define("Type", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {timestamps: false},
  {createdAt: false},
  {updatedAt: false}
  );
};
 