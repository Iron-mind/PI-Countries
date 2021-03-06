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
    let {name,Pasc} = req.query
    if(Pasc){
       Pasc = (Pasc.toLowerCase() === 'true')
    }

    if (!name) {
      let countries = await Country.findAll({
        // Add order conditions here....
        order: !Pasc?[
            ['name', 'ASC'],
        ]:[
            ['population_Size', 'ASC'],
        ],
        include: Activity // que incluya las actividades

      })
      return res.status(200).json(countries)

    }

    let country = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      order: !Pasc?[
          ['name', 'ASC'],
      ]:[
          ['population_Size', 'ASC'],
      ],
      include: Activity
    })

    if(!country) return res.status(400).json('country not found')
    res.status(200).json(country)

  } catch (error) {
    res.status(400).send('countries not found')
  }

})


router.get('/countries/:id', async (req,res)=>{
  try {
    let {id} = req.params

    if(!id) return res.status(200).json('country not found')

    let country = await Country.findOne({
      where: {
        ID: {
          [Op.iLike]: `%${id}%`,
        },
      },
      include: Activity
    })

    if(!country) return res.status(400).send('country not found')

    res.status(200).send(country)


  } catch (err) {
    res.status(400).json('countries not found')
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
      console.log(act)
      let ActivityInDatabase = await Activity.create(act);

     await countryInDatabase.addActivity(ActivityInDatabase);

      res.status(200).json(ActivityInDatabase);

    } catch (error) {
      console.log(error);
        res.status(400).json(error);

    }
})





module.exports = router;
