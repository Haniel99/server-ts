import { sign, verify } from "jsonwebtoken"; 
const JWT_KEY: string = process.env.JWT_KEY || ""; 

const singJWT = (id: number) => {
    return sign(
        { id },
        JWT_KEY,
        { expiresIn: "20h" }
    );
}
const verifyJWT = (jwt: string) => {
    return verify(
        jwt,
        JWT_KEY
    );
}

export { singJWT, verifyJWT };