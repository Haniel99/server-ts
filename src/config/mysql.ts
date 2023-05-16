import mysql from "mysql";
/**
 * Data to connect to the database
 * @constant obConfing   
 */
const obConfing = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
}
/**
 * Start the mysql instance and create a connection to the database.
 * @method mysqlIntance  
 */
const mysqlIntance = mysql.createConnection(obConfing);

/**
 * Start connection to the database with mysqlIntance
 * @method connect 
*/
mysqlIntance.connect(err => {
    err ? console.log('Error connecting to the database') :
        console.log('Database connection successful');
});
export { mysqlIntance }; 