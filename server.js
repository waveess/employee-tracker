/* 
Dependencies  
====================================================================================
*/
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();

/* 
Connection to the DB
====================================================================================
*/
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    //mySql username
    user: 'root',
    //password
    password: process.env.MYSQL_PASSWORD,
    database: 'employee_trackerDB'
});

connection.connect(err => {
    if(err) throw err;
    console.log('Connected as id:' + connection.threadId);
    console.log("******************************************************\n");
    console.log("*                                                    *\n");
    console.log("*Welcome To Employee Manager                         *\n");
    console.log("*                                                    *\n");
    console.log("******************************************************\n");

    // showAllEmployees();
    start();
});

// promting questions to users

const start = () => {
    return inquirer
        .prompt({
            name: 'initialAction',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                "View All the Departments",
                "View All the Roles",
                "View All the Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee's Role",
                "Delete an Employee",
                "Exit"
            ]
        })
        .then(function(answer) {
            switch(answer.initialAction){
                    case "View All the Departments":
                        showAllDepartments();
                        start();
                        break;
                    case "View All the Roles":
                        showAllRoles();
                        start();
                        break;
                    
                    case "View All the Employees":
                        showAllEmployees();
                        start();
                        break;

                    case "Add a Department":
                        addDepartment();
                        //start();
                        break;

                    case "Add a Role":
                        addRole();
                        //start();
                        break;

                    case "Add an Employee":
                        addEmployee();
                        break;

                    case "Update an Employee's Role":
                        updateRole();
                        break;

                    case "Delete an Employee":
                        deleteEmployee();
                        break;

                    case "Exit":
                        connection.end();
            }
        });
}