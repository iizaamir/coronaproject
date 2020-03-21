const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'aamir100%',
    database: 'firstdbnode',
    connectionLimit: 5
});
// const pool = mariadb.createPool({
//     host: 'u3r5w4ayhxzdrw87.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: 'zy4mtnvwf9dty1f3',
//     password: 'uwgnbk8xewrs7ick',
//     database: 'u44q7pvv79hdql48',
//     port: 3306,
//     connectionLimit: 5
// });
module.exports = pool;