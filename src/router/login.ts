import { Router } from "express";
import { login_controller_head, login_controller_professor, signup_controller } from "../controller/login_controller";
const router = Router();
/**
 * These paths are for accessing the main page "/algorithms_test".
 * @method post  '/login/in'
 * @method post '/login/signup'
 */
router.post('/head', login_controller_head); //Login for the "Ricardo validivia"
router.post('/professor', login_controller_professor); //Login for the professor 
router.post('/signup', signup_controller);
export {router}; 