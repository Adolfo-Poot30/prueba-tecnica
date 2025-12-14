import { pool } from '../config/db.js';


export const getTareas = async (req, res) => {
const result = await pool.query(
'SELECT * FROM tareas WHERE id_usuario = $1',
[req.user.id]
);
res.json(result.rows);
};


export const createTarea = async (req, res) => {
const { titulo, descripcion } = req.body;
const result = await pool.query(
'INSERT INTO tareas (id_usuario, titulo, descripcion) VALUES ($1,$2,$3) RETURNING *',
[req.user.id, titulo, descripcion]
);


res.status(201).json(result.rows[0]);
};


export const updateTarea = async (req, res) => {
const { id } = req.params;
const { titulo, descripcion, estado } = req.body;
const result = await pool.query(
'UPDATE tareas SET titulo=$1, descripcion=$2, estado=$3 WHERE id=$4 AND id_usuario=$5 RETURNING *',
[titulo, descripcion, estado, id, req.user.id]
);


res.json(result.rows[0]);
};


export const deleteTarea = async (req, res) => {
const { id } = req.params;


await pool.query(
'DELETE FROM tareas WHERE id=$1 AND id_usuario=$2',
[id, req.user.id]
);

res.sendStatus(204);
};
