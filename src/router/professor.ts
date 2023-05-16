import { Request, Response, Router } from "express";
const router = Router();

//Routers
router.get('', (req: Request, res: Response) => {
    res.send({response: "response"});
});
export { router };