

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
      type:DataTypes.INTEGER,
      validate:{
        min:1,
        max: 5
      }
    },
    duration:{
      type:DataTypes.STRING,


    },
    seasons:{
      type:DataTypes.ENUM(['spring', 'summer', 'autumn' , 'winter']),
      
   
    }
  });
};

