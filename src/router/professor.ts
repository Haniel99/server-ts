import { Request, Response, Router } from "express";
import { authentication } from "../middleware/authentication";
import { isProfessor } from "../middleware/verifyType";
import {
  get_schedule_cotroller,
  get_schedule_semester_cotroller,
  set_profesor_schedule,
  get_horario_profesor,
  delete_block
} from "../controller/professor/schedule_cotroller";
const router = Router();

//Routers
router.get("/", authentication, isProfessor, (req: Request, res: Response) => {
  res.send({
    status: true,
    response: "The user is professor",
  });
});
router.get("/horario", authentication, get_schedule_cotroller);
router.post("/horario", authentication, get_schedule_semester_cotroller);
router.post("/set-horario-disponible", authentication, set_profesor_schedule);
router.get("/get-horario-disponible/:id", authentication, get_horario_profesor );
router.delete('/delete/:id', authentication,  delete_block);
export { router };
