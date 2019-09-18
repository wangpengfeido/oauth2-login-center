const { pool, queryWrapper } = require('./index.js');

module.exports.getDevelopers = function() {
  return queryWrapper(pool, 'select * from developer').then(results => {
    console.log(results);
  });
};

module.exports.addDevelopers = function() {
  return queryWrapper(pool, '').then(result => {
    console.log(result);
  });
};
