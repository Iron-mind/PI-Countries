const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID:{
      type: DataTypes.STRING(3),
      allowNull:false
    },
    flagImage:{
      type:DataTypes.STRING,
      allowNull:false
    },
    continent:{
      type: DataTypes.ENUM(['Africa',	  'Asia',	  'Europe',	 'North America',	  'South America'	,  'Antarctica',	  'Oceania'])
     , allowNull:false
    },
    capital:{
      type: DataTypes.STRING,
      
    },
    area:{
      type: DataTypes.STRING
    },
    subregion:{
      type: DataTypes.STRING
    },
    population_Size:{
      type: DataTypes.INTEGER,
      validate:{
        min:0
      }
    }
  });
};

