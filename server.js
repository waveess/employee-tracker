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
})