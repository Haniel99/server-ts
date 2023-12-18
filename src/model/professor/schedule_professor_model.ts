import { query, mysqlIntance } from "../../config/config_mysql";

const delete_block_model = async (id: any) => {
  let sql = ` delete from horario_profesor where id = ${mysqlIntance.escape(id)}`;
  await query(sql);
};

const get_horario_profesor_model = async (user_id: any, shedule_id: any) => {
  const daysOfWeek = [
    ["Lunes"],
    ["Martes"],
    ["Miercoles"],
    ["Jueves"],
    ["Viernes"],
  ];
  let json;
  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i][0];
    let sql = `SELECT hp.id, b.hora_inicio, b.hora_fin
FROM horario_profesor hp
JOIN bloque_horario b ON (hp.bloque_id = b.bloque_id)
JOIN horario h ON (h.horario_id = hp.horario_id)
JOIN docente d ON (d.docente_id = hp.docente_id)
WHERE hp.dia = ${mysqlIntance.escape(day)}
AND h.horario_id = ${mysqlIntance.escape(shedule_id)}
AND d.docente_id = ${mysqlIntance.escape(user_id)};
`;

    //query
    const res = await query(sql);
    // Convert the response to JSON format
    json = JSON.parse(JSON.stringify(res));
    daysOfWeek[i].push(json);
  }
  return daysOfWeek;
};

const set_horario_profesor_model = async ({
  bloque_id,
  horario_id,
  docente_id,
  dia,
}: {
  bloque_id: any;
  horario_id: any;
  docente_id: any;
  dia: any;
}) => {
  let sql: string = `
  insert into horario_profesor 
        values (
          NULL,
            ${mysqlIntance.escape(dia)},
            NULL,
            ${mysqlIntance.escape(bloque_id)},
            ${mysqlIntance.escape(horario_id)},
            ${mysqlIntance.escape(docente_id)}
        )
    `;
  return await query(sql);
};

const get_schedule_professor_model = async (
  user_id: number,
  shedule_id: number
) => {
  //sql
  const daysOfWeek = [
    ["Lunes"],
    ["Martes"],
    ["Miercoles"],
    ["Jueves"],
    ["Viernes"],
  ];
  let json;
  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i][0];
    let sql = `select b.hora_inicio, b.hora_fin, asi.nombre AS asignatura, u.nombre AS nombre_profesor, u.apellido AS apellido_profesor
    , sa.nombre as sala, sa.número as numero_sala, a.grupo as grupo 
from asignacion a join semestre 
s on(a.semestre_id = s.semestre_id and s.horario_id = ${mysqlIntance.escape(
      shedule_id
    )}
and a.docente_id = ${mysqlIntance.escape(user_id)})
join sala sa on(a.sala_id = sa.sala_id) join usuarios u on(a.docente_id = u.usuario_id) 
join asignatura asi on(a.asignatura_id = asi.asignatura_id) join bloque_horario b on(a.bloque_id = b.bloque_id)
where a.dia = ${mysqlIntance.escape(day)} `;
    //query
    const res = await query(sql);
    // Convert the response to JSON format
    json = JSON.parse(JSON.stringify(res));
    daysOfWeek[i].push(json);
  }
  return { response: daysOfWeek };
  //answer
};

export {
  get_schedule_professor_model,
  set_horario_profesor_model,
  get_horario_profesor_model,
  delete_block_model
};
