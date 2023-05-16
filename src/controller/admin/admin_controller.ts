import { Response } from "express";
import { admin_model } from "../../model/admin/admin_model";
import { request } from "../../interface/request_interface";

//This function shows all admin's data 
const admin_controller = async (req: request, res: Response) => {
    try {
        const admin_res = await admin_model();
        return res.send('This section is the main page');
    } catch (error) {
        
    }
}




export {
    admin_controller,
};