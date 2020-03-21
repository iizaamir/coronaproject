

var pool = require('./../server');

exports.createShops = async function(req,res,next){
    var id = req.body.id;
    var city = req.body.city;
    var email = req.body.email;
    var password = req.body.password;
    pool.getConnection()
        .then(conn => {
            conn.query("INSERT INTO shopes value(?,?,?,?)" ,[id,city,email,password])
                .then((rows) => {
                    console.log(rows);
                    res.json({
                        status : "good"
                    });
                })
                .catch(err => {
                    //handle error
                    console.log(err);
                    conn.end();
                })
        }).catch(err => {
            console.log("Not connected!!!");
        })
};

exports.viewShops = async function (req, res, next) {
    pool.getConnection()
    .then(conn => {
        conn.query(`SELECT * FROM shopes`)
            .then((rows) => {
                // console.log(rows);
                res.json({
                    status: "good",
                    Data: rows
                });
            }).catch(err => {
                console.log("Error in query"),
                res.json({
                    status : "error in query",
                });
                conn.end();
            }).catch(err => {
                console.log('error in connection to dtatabase');
                res.json({
                    status : "err in db connection"
                })
            }) 
    })
};

// exports.deleteShops = async function (req, res, next) {
//     var id = req.params.id;
//     pool.createConnection()
//         .then(conn => {
//             conn.query(`Delete from shops where id=${id}`)
//                 .then((rows) => {
//                     res.json({
//                         status : "deleted successful"
//                     });
//                 }).catch((err)=> {
//                     console.log('err in the query');
//                     conn.end();
//                 })
//         }).catch((err)=>{
//             console.log('Err in db connection');
//         })
// };

// exports.updateShops = async function (req, res, next) {
//     var id = req.query.id;
//     var city = req.body.city;
//     var email = req.body.email;
//     var password = req.body.password;
//     // var id = req.params.id;
//     // var id = req.body.id;
//     pool.getConnection().then(conn => {
//         var sql = `UPDATE shopes SET city=?, email=?, password=? WHERE id=${id}`
//         var data = [city, email, password];
//         conn.query(sql,data).then((rows) => {
//             res.json({
//                 status: "good"
//             });
//         }).catch((err) => {
//             console.log('error in query')
//             conn.end();
//         }).catch(err => {
//             console.log("error in db connection");
//         })
//     })
// };