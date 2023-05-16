import { query, mysqlIntance } from "../../config/config_mysql";
/**
 * This function return all professor's data 
 * @param id 
 * @returns {query}
 */
const get_professors_model = async (department_id: number) => {
    try {
        //sql 
        let sql: string = `select CONCAT(u.nombre, ' ', u.apellido) as nombre, d.docente_id profesor_id, u.rut, u.correo from usuarios u join docente d on(u.usuario_id = d.docente_id and u.departamento_id` +
        ` = ${mysqlIntance.escape(department_id)})`;
        //Query to data base
        const response_db = await query(sql);
        //Response
        return response_db;
    } catch (error) {
        //console.log(error);
        return {status: false }
    }
}

export {
    get_professors_model
};
