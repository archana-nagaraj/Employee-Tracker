// Get the client
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
  prompts();
});

afterConnection = () => {
  connection.query('SELECT * FROM department', function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
};


function prompts() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                    'View all employees',
                    'View all departments',
                    'View all roles',
                    'Add an employee',
                    'Add a department',
                    'Add a role',
                    'Update employee role',
                    'Delete an employee',
                    'EXIT'
                    ]
            }).then(function (answer) {
                switch (answer.action) {
                    case 'View all employees':
                        viewEmployees();
                        break;
                    case 'View all departments':
                        viewDepartments();
                        break;
                    case 'View all roles':
                        viewRoles();
                        break;
                    case 'Add an employee':
                        addEmployee();
                        break;
                    case 'Add a department':
                        addDepartment();
                        break;
                    case 'Add a role':
                        addRole();
                        break;
                    case 'Update employee role':
                        updateRole();
                        break;
                    case 'Delete an employee':
                        deleteEmployee();
                        break;
                    case 'EXIT': 
                        exit();
                        break;
                    default:
                        break;
                }
        })
};

// view all departments in the database
// function viewDepartments() {
//     var query = 'SELECT * FROM department';
//     connection.query(query, function(err, res) {
//         if(err)throw err;
//         console.log(res.length + ' Departments found!');
//         console.table('All Departments:', res);
//         prompts();
//     })
// };

function viewDepartments() {
    var query = 'SELECT * FROM department';
    connection.promise().query(query)
    .then( ([rows,fields]) => {
      console.log('\n');
      console.log(rows.length + ' Departments found!');
      console.table('All Departments:', rows);
      prompts();
    })
    .catch(console.log);
};

// view all roles in the database
function viewRoles() {
    var query = 'SELECT * FROM role';
    connection.promise().query(query)
    .then( ([rows,fields]) => {
      console.log('\n');
      console.log(rows.length + ' Roles found!');
      console.table('All Roles:', rows);
      prompts();
    })
    .catch(console.log)
    // .then(() => exit());
};


// function viewRoles() {
//     var query = 'SELECT * FROM role';
//     connection.query(query, function(err, res){
//         if (err) throw err;
//         console.log(res.length + ' Roles found!');
//         console.table('All Roles:', res);
//         prompts();
//     })
// };

// view all employees in the database
function viewEmployees() {
    var query = 'SELECT * FROM employee';
    connection.promise().query(query)
    .then( ([rows,fields]) => {
      console.log('\n');
      console.log(rows.length + ' Employees found!');
      console.table('All Employees:', rows);
      prompts();
    })
    .catch(console.log)
    // .then(() => exit());
};


// function viewEmployees() {
//     var query = 'SELECT * FROM employee';
//     connection.query(query, function(err, res) {
//         if (err) throw err;
//         console.log(res.length + ' employees found!');
//         console.table('All Employees:', res); 
//         prompts();
//     })
// };

// exit the app
function exit() {
    connection.end();
};
