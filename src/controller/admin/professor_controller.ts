import { get_department_id } from "../../model/admin/services_model";
import { get_professors_model } from "../../model/admin/professor_model";
import { request } from "../../interface/request_interface";
import { Response } from "express";
import { get_horario_profesor_model } from "../../model/professor/schedule_professor_model";


const get_professors_controller = async (req: request, res: Response) => {
    try {
        //get user id
        const {id}:  any = req.user;
        //get department id
        const department_id = await get_department_id(id);
        //Request to data base
        const response_model = await get_professors_model(department_id[0].departamento_id);
        //veryfy model Answer
        res.status(200).send(response_model);
        //response
    } catch (error) {
        res.status(500).send({ 
            status: false, 
            response: "Unexpected error occurred" 
        });
    }
}
const get_horario_profesor = async (req: request, res: Response) => {
    try {
        //get user id
        const {id}:  any = req.user;
        const {  user_id, horario_id } = req.body.data;
        //Request to data base
        const response_model = await get_horario_profesor_model(user_id, horario_id);
        //veryfy model Answer
        return res.status(200).json({
            status: true,
            response: response_model,
          });
        //response
    } catch (error) {
        res.status(500).send({ 
            status: false, 
            response: "Unexpected error occurred" 
        });
    }
}
export {
    get_professors_controller,
    get_horario_profesor
}