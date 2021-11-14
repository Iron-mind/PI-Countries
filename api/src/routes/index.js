const { Router } = require('express');
const fetch = require( "cross-fetch"); //uso cross-fetch que me permite usar el fetch
const { Country, Activity, conn} = require('../db.js')
const { Op } = require('sequelize');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//Actualizar base de datos
async function saveInDatabase(country) {
    await Country.create({
        name: country.name.official,
        ID: country.cca3,
        flagImage: country.flags[1] ,
        continent: country.continents[0],
        capital: country.capital && country.capital[0] ,
        area:country.area,
        subregion: country.subregion,
        population_Size: country.population
      });
}

const urlRC = 'https://restcountries.com/v3/all'

fetch(urlRC)
.then(res=> res.json())
.then(data=> {
    let i= 0
    // 249 countries in the other api
    while (i<249) {
        saveInDatabase(data[i])
        i++
    }
    
})
.catch(err=> console.log(err))




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', async (req,res)=>{
  try {
    let countries = await Country.findAll({
      include: Activity // que incluya las actividades
    })


    res.status(200).json(countries)
    
  } catch (error) {
    
  }
    
})

router.post('/activity', async (req,res)=>{
    
    try {
      const act = req.body;
      let countryInDatabase = await Country.findOne({
        where: {
          name: {
            [Op.iLike]: `%${act.country}%`,
          },
        },
      });

      let ActivityInDatabase = await Activity.create(act);

      countryInDatabase.addActivity(ActivityInDatabase);

      res.status(200).json(ActivityInDatabase);
      
    } catch (error) {
        res.status(400).send('Problem To create the activity, check that all data is correct.');
        
    }
    
    
})

module.exports = router;
