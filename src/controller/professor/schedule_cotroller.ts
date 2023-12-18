import { Response } from "express";
import { request } from "../../interface/request_interface";
import {
  get_department_id,
  get_head_id,
} from "../../model/admin/services_model";
import { get_schedule_model } from "../../model/admin/schedule_model";
import {
  get_schedule_professor_model,
  delete_block_model,
  set_horario_profesor_model,
  get_horario_profesor_model,
} from "../../model/professor/schedule_professor_model";

const get_schedule_cotroller = async (req: request, res: Response) => {
  try {
    const user: any = req.user;
    //Get department id
    const dId = await get_department_id(user.id);
    //Get department dead
    const head_id = await get_head_id(dId[0].departamento_id);
    const answer_model = await get_schedule_model(head_id[0].jefe_carrera_id);
    if (answer_model.status) {
      return res.status(200).send({
        status: true,
        response: answer_model.response,
      });
    }
    res.status(500).send({
      status: false,
      response: "No hay resgistros",
    });
  } catch (error) {}
};

const get_schedule_semester_cotroller = async (req: request, res: Response) => {
  try {
    const user: any = req.user;
    const { data } = req.body;
    const answer_model = await get_schedule_professor_model(
      user.id,
      data.schedule_id
    );
    if (answer_model.response.length !== 0) {
      return res.status(200).send({
        status: true,
        response: answer_model.response,
      });
    }
    console.log(answer_model);
  } catch (error) {}
};

const set_profesor_schedule = async (req: request, res: Response) => {
  try {
    const user: any = req.user;
    let { data } = req.body;
    data = {
      ...data,
      docente_id: user.id,
    };
    await set_horario_profesor_model(data);
    return res.status(200).json({
      msg: "Guardado exitosamente",
    });
  } catch (error) {
    return res.status(500).send("Error on the server");
  }
};

const delete_block = async (req: request, res: Response) => {
  try {
    const { id } = req.params;
    await delete_block_model(id);
    res.status(200).json({
      msg: "Eliminado",
    });
  } catch (error) {
    return res.status(500).send("Error on the server");
  }
};

const get_horario_profesor = async (req: request, res: Response) => {
  try {
    const user: any = req.user;
    const { id } = req.params;
    const profesor = await get_horario_profesor_model(user.id, id);
    return res.status(200).send({
      status: true,
      response: profesor,
    });
  } catch (error) {
    return res.status(500).send("Error on the server");
  }
};
export {
  get_schedule_cotroller,
  get_horario_profesor,
  get_schedule_semester_cotroller,
  set_profesor_schedule,
  delete_block
};
