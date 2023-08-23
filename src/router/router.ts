import { Router } from "express";
import fs from "fs";
const path = __dirname;
const router = Router();

/**
 * @function fs.readdirSync
 * This function imports the paths of the diferect files and then used 
 * for the router
 * @constant router
 */
/*
fs.readdirSync(path).filter((name)=> {
    const new_name = name.split('.').shift();
    if(new_name != 'router'){
        import(`./${new_name}`).then((new_router) => {
            router.use(`/${new_name}`,new_router.router);
        })
    }
});
*/
import("./login").then((new_router) => {
    router.use(`/login`,new_router.router);
})
import("./admin").then((new_router) => {
    router.use(`/admin`,new_router.router);
})
import("./professor").then((new_router) => {
    router.use(`/professor`,new_router.router);
})
import("./rector").then((new_router) => {
    router.use(`/rector`,new_router.router);
})
import("./verify").then((new_router) => {
    router.use(`/verify`,new_router.router);
})
export default router; 