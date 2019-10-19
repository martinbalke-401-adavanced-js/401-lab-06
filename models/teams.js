'use strict';

const Model = require('./model.js');

const schema = {
  name: { type: String, required: true },
  color: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['red', 'blue', 'yellow', 'purple'],
  },
};

const url = 'http://localhost:3000/teams';

class Teams extends Model {
  constructor() {
    super(schema, url);
  }
}

module.exports = Teams;
