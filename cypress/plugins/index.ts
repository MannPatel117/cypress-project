// const Tedious = require('tedious');
// const dbConfigSQL = require('../../cypress.json');
// module.exports = (on:any) => {
//    on('task', {'sqlServer:execute' : (sql:any) => {
//     const connection = new Tedious.Connection(dbConfigSQL.db);
//       return new Promise((res, rej) => {
//         connection.on('connect', (err:any) => {
//           if (err) {
//             rej(err);
//           }

//           const request = new Tedious.Request(sql, function (err:any, rowCount:any, rows:any) {
//             return err ? rej(err) : res(rows);
//           });

//           connection.execSql(request);
//         });
//       });
//     }
//   }
//   )};

