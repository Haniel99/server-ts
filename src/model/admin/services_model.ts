import { query, mysqlIntance } from "../../config/config_mysql";

//Services
const get_department_id = async (id: number) => {
    try {
        //sql
        let sql: string = `select departamento_id from usuarios where usuario_id = ${mysqlIntance.escape(id)}`; 
        //Query to data base
        const response_id = await query(sql); 
        //Return
        return JSON.parse(JSON.stringify(response_id));
    } catch (error) {
        
    }
};

export { get_department_id };