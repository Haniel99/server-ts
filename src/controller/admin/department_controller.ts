import { Response } from "express";
import { request } from "../../interface/request_interface";
import { add_subject_model, get_subjects_model, add_room_model } from "../../model/admin/department_model"; 
import { get_department_id } from "../../model/admin/services_model";
//This section is to management 
const get_subjects_controller = async (req: request, res: Response) => {
    try {
        const user: any = req.user;
        const res_q = await get_department_id(user.id);
        const response_model = await get_subjects_model(res_q[0].departamento_id);
        res.status(200).send(response_model);
    } catch (error) {
        
    }
}

//This funcion is to add a new subject 
const add_subject_controller = async(req: request, res: Response) => {
    try {
        //get body data
        const {data} = req.body;
        //get user id
        const user:  any = req.user;
        //add body data
        const res = await add_subject_model(data,user.id);
        //validate answers
    } catch (error) {
        console.log(error);
    }
}


//This funciton is to add a new class room
const add_room_controller = async(req: request, res: Response) => {
    try {
        //const res = await add_user_model();
    } catch (error) {
        
    }
}


export {
    get_subjects_controller, 
    add_subject_controller,
    add_room_controller
};