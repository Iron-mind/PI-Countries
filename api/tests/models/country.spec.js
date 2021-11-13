const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work with valid properties', (done) => {
        Country.create({
          name: 4,
          ID: 'col',
          flagImage: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fflag-of-Colombia&psig=AOvVaw09WAK60noFwmfKYCVPluzR&ust=1636852308885000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODHjJSUlPQCFQAAAAAdAAAAABAD',
          continent: 'South America',
          capital: 'Bogotá',
          area: 3232342,
          subregion: 'South America',
          population_Size: 40000000,
        })
        .then(() => done())
        .catch(() => done('Valid country was not created'));
      });

      it('should not work when mandatory properties are missing', () => {
        Country.create({
          name: 'colombia',
          ID: 'col', 
        })
        .then(() => done('invalid country was created'))
        .catch(() => done()) ;;
      })
    });
  });
});
