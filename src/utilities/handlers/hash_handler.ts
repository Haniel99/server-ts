import { hash, compare } from "bcryptjs";
const hashPassword = async (password: string) => {
    return await hash(password, 8);
}

const comparePassword = async (password: string, passwordHash: any) => {
    return await compare(password, passwordHash);
}

export { hashPassword, comparePassword }