const mysql = require('mysql2');
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Creates the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: '',
  database: 'employeetracker_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
 afterConnection();
});

afterConnection = () => {
  connection.query('SELECT * FROM department', function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};
