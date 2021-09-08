const { DataTypes,Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },Id:{
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    Imagen:{type: DataTypes.STRING,allowNull: false},
    Vida:{type:DataTypes.INTEGER},
    Fuerza:{type:DataTypes.INTEGER},
    Defensa:{type:DataTypes.INTEGER},
    Velocidad:{type:DataTypes.INTEGER},
    Altura:{type:DataTypes.INTEGER},
    Peso:{type:DataTypes.INTEGER},
    Tipos:{type:DataTypes.JSON}
  },{timestamps: false,});
};
