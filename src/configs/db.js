const sql = require('mssql');
const { USERNAME, PASSWORD, DBNAME } = require('../constants/db');

const dbConfig = {
  user: USERNAME,
  password: PASSWORD,
  database: DBNAME,
  server: `localhost`,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

function connectDB() {
  var dbConn = new sql.ConnectionPool(dbConfig);
  console.log('Connecting...');
  dbConn
    .connect()
    .then(() => {
      console.log('Yeah! Connected to database successfully!');
    })
    .catch(function (err) {
      console.log('Could not connect to the database! Exiting now...');
      console.log(err);
    });
}

module.exports = { connectDB };

// const connectDB = async () => {
//   try {
//     console.log('Connecting...');
//     await sql.connect(dbConfig, (err) => {
//       if (err) console.log(err);
//       console.log('Connected !');
//       var request = new sql.Request();
//       request.query('select * from NHANVIEN', function (err, record) {
//         if (err) console.log(err);
//         return record;
//       });
//     });
//   } catch (err) {
//     console.log('🚀 ', err);
//   }
// };



  // const record = await connectDB();
  // await sql.connect(dbConfig, (err) => {
  //   if (err) console.log(err);
  //   var request = new sql.Request();
  //   request.query('SELECT * from NHANVIEN', function (err, record) {
  //     if (err) console.log(err);
  //     res.send(record);
  //   });
  // });