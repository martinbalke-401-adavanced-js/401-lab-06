'use strict';



const data = JSON.parse(JSON.stringify({
  'firstName': 'Martin',
  'lastName': 'Balke',
  '_team': 'Blue Otter',
  'birthday': '06/12/91',
  'likes': 'dogs',
}));

const json = () => data;
const res = {json};

const fetch = (url, options) => {
  if(url.match(/bad/i))return Promise.reject('Bad Url');
  return Promise.resolve(res);
};

module.exports = fetch;