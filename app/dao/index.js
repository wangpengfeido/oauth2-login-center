// const path = require('path');
// const jsonfile = require('jsonfile');
// const mysql = require('mysql');

// const mysqlConf = jsonfile.readFileSync(path.resolve(__dirname, '../../config/mysql.json'));

// const pool = mysql.createPool({
//   connectionLimit: 20,
//   ...mysqlConf,
// });

// function queryWrapper(connection, sql) {
//   return new Promise((resolve, reject) => {
//     connection.query(sql, (error, results, fields) => {
//       if (error) {
//         reject(error);
//         return;
//       }
//       resolve(results);
//     });
//   });
// }

// module.exports.pool = pool;
// module.exports.queryWrapper = queryWrapper;
