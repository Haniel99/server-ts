import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

interface request extends Request {
    user?: string | JwtPayload;
}

export { request };