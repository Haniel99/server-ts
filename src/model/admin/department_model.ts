import { query, mysqlIntance } from "../../config/config_mysql"; 
import { get_department_id } from "./services_model";
import { Subject, Room } from "../../interface/admin_interface";
//This funcion is to add a new subject 
const add_subject_model = async ( data: Subject, id: number) => {
    //sql
    //get id department
    let departamento_id = get_department_id(id); 
    let sql: string = 'insert into asignatura values (' + 
    `${mysqlIntance.escape(data.nombre)},` + 
    `NULL,` +
    `${mysqlIntance.escape(data.codigo)},` +
    `${mysqlIntance.escape(data.tipo_formacion)},` +
    `${mysqlIntance.escape(departamento_id)}`+
    `)`
    ;
    //query
    const response_sql = await query(sql);
    return {status: true};   
}
//This function is to get all subjects
const get_subjects_model = async (id: number) => {
    //Sql
    let sql = `select asignatura_id, nombre, codigo, tipo_formacion from asignatura where departamento_id = ${mysqlIntance.escape(id)}`;
    //Query
    const res = await query(sql);
    //Response
    return { status: true, response: JSON.parse(JSON.stringify(res))};
}

//This funciton is to add a new class room
const add_room_model = async(data: Room) => {
    try {
    } catch (error) {
        
    }
}

export { 
    add_subject_model, 
    add_room_model,
    get_subjects_model
};