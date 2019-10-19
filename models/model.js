'use strict';

// const validate = require('jsonschema').validate;
const fetch = require('node-fetch');


class Model {
  constructor(schema, url) {
    this.schema = schema;
    this.url = url;
  }

  get(id) {
    const url = `${this.url}/${id}`;
    return fetch(url)
      .then( (res) => res.json())
      .catch( (error) => console.error(error));
  }

  getFromField(query) {
    const url = `${this.url}?${query}`;
    return fetch(url)
      .then((res) => res.json())
      .catch((error) => console.error(error));
  }

  create(record) {
    return fetch(this.url, { method: 'POST', body: record })
      .then((res) => res.json())
      .catch((error) => console.error(error));
  }

  update(id, record) {
    const url = `${this.url}/${id}`;
    return fetch(url, { method: 'PUT', body: record })
      .then((res) => res.json())
      .catch((error) => console.error(error));
  }

  delete(id) {
    const url = `${this.url}/${id}`;
    return fetch(url, { method: 'DELETE'})
      .then((res) => res.json())
      .catch((error) => console.error(error));
  }

  count(query) {}

  sanitize(record) {}
}

module.exports = Model;
