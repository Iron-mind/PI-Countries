const { Router } = require('express');
const { Country, Activity, conn} = require('../db.js')
const { Op } = require('sequelize');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



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
    res.status(400).json('countries not found')
  }
    
})


router.get('/countries/:id')

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
