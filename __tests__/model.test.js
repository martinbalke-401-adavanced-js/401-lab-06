const Model = require('../models/model.js');
const Teams = require('../models/teams.js');
const People = require('../models/people.js');

const model = new Model();
const team = new Teams();
const people = new People();

jest.mock('node-fetch');



describe('Mock fetch testing', () => {
  
  it('Error when given a bad URL', async (done) => {
    try {
      await model.get('bad');
    } catch (error) {
      expect(error).toBe('Bad Url');
    }
    done();
  });
  
  it('Returns correct json data when given a good URL', async (done) => {
    let data = await model.get('1');
    expect(data.firstName).toBe('Martin');
    done();
  });
});


describe('Model', () => {
  
  it('People returns correct json data when given a good URL', async (done) => {
    let data = await people.get('1');
    expect(data.firstName).toBe('Martin');
    done();
  });
  
  it('Teams returns correct json data when given a good URL', async (done) => {
    let data = await team.get('1');
    expect(data.firstName).toBe('Martin');
    done();
  });
});
