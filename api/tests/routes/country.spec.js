/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, Activity, conn } = require('../../src/db.js');


const agent = session(app);
const country = {
  name: 'Colombia',
  ID: 'col',
  flagImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fflag-of-Colombia&psig=AOvVaw09WAK60noFwmfKYCVPluzR&ust=1636852308885000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODHjJSUlPQCFQAAAAAdAAAAABAD',
  continent: 'South America',
  capital: 'Bogotá',
  area: 3232342,
  subregion: 'South America',
  population_Size: 40000000,
};

const activityPosted ={
  
  "name": "Visitar el serro de montserrat",
  "difficulty":4,
  "duration":"3 horas",
  "season":"summer",
  "country": "colombia"
}

const country2 = {
  ...country,
  activities: [activityPosted]
}

describe('Post /activity', () => {
  it('should get 200', () =>
    agent.post('/activity')
    .send(activityPosted)
    
    .expect(200)
  );
  
  it('should be exist the activity: visit Montserrat', function(){
    return agent.post('/activity')
           .send(JSON.stringify(activityPosted))
           .then(() => {
            return Activity.findOne({
              where: {
                name: activityPosted.name,
                difficulty: 4
              },
              
            });
          })
          .then(act => {
            expect(act.name).to.equal(activityPosted.name);
            expect(act.difficulty).to.equal(4);
          })
          
  })
  
});


describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create( country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('response should be json', function(){
      return agent.get('/countries')
        .expect('Content-Type', /json/);
    })
    
   
  });
})



  describe('GET /countries/:countryID', () => {
    it('should get 200', () =>
      agent.get('/countries/col').expect(200)
    );
    it('response should be json', function(){
      return agent.get('/countries/col')
        .expect('Content-Type', /json/);
    })
    it('response should be colombian object', function(){
      return agent.get('/countries/col')
        .expect(country2);
    })
    it('no response when id is invalid', function(){
      return agent.get('/countries/papaya')
        .expect(400);
    })
    
  });


  describe(`GET /countries/?name='...'`, () => {
    it('should get 200', () =>
      agent.get('/countries/?name=Colombia').expect(200)
    );
    it('response should be json', function(){
      return agent.get('/countries/?name=Colombia')
        .expect('Content-Type', /json/);
    })
    it('response should be colombian object', function(){
      return agent.get('/countries/?name=Colombia')
        .expect(country2);
    })
    it('no response when name is invalid', function(){
      return agent.get('/countries/?name=polombia')
        .expect(400);
    })
  
})