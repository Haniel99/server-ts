import { JwtPayload } from "jsonwebtoken";

export interface UserPayload{
    user?: string | JwtPayload;
}