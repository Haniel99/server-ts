/**
 * It is to access the node utilities 
 * @https://nodejs.org/api/util.html
 * @module util
 * @method mysqlIntance Instance to access the database 
 */
import util from "node:util";
import { mysqlIntance } from "./mysql";

/**
 * This constant is to making asynchronous queries
 * @constant query   
 */
const query = util.promisify(mysqlIntance.query).bind(mysqlIntance);

export { query, mysqlIntance };