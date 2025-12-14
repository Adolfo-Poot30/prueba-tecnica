import { pool } from '../config/db.js';
import { hashPassword, comparePassword } from '../utils/bcrypt.js';
import { generateToken } from '../utils/jwt.js';


export const register = async (req, res) => {
const { nombre, correo, contrasena } = req.body;


const hashed = await hashPassword(contrasena);


const result = await pool.query(
'INSERT INTO usuarios (nombre, correo, contrasena) VALUES ($1,$2,$3) RETURNING id,nombre,correo',
[nombre, correo, hashed]
);


res.status(201).json(result.rows[0]);
};


export const login = async (req, res) => {
const { correo, contrasena } = req.body;


const result = await pool.query(
'SELECT * FROM usuarios WHERE correo = $1',
[correo]
);


if (result.rows.length === 0) {
return res.status(401).json({ message: 'Credenciales inválidas' });
}

const user = result.rows[0];
const valid = await comparePassword(contrasena, user.contrasena);


if (!valid) {
return res.status(401).json({ message: 'Credenciales inválidas' });
}


const token = generateToken({ id: user.id, correo: user.correo });


res.json({ token });
};
