interface User_singup{
    nombre: string,
    apellido: string,
    rut: string,
    correo: string,
    contrasena: string,
    telefono: number,
    departamento_id: number 
}

interface User_login{
    correo: string,
    contraseña: string,
    type: string
}

export { User_singup, User_login };