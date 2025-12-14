Para ejecutar el proyecto:
1. Descargar el proyecto (es importante contar con node.js en su equipo)
2. Crear base de datos en PostgreSQL con el siguiente esquema:

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL
);

CREATE TYPE estado_tarea AS ENUM (
    'Pendiente',
    'En Progreso',
    'Completada'
);

CREATE TABLE tareas (
    id SERIAL PRIMARY KEY,
    id_usuario INTEGER NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    descripcion TEXT,
    estado estado_tarea NOT NULL DEFAULT 'Pendiente',

    CONSTRAINT fk_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios (id)
        ON DELETE CASCADE
);

CREATE INDEX idx_tareas_usuario
ON tareas (id_usuario);

3. Colocar las variables de entorno en un .env como en .env.example
4. Abrir terminal en la ruta del proyecto y ejecutar npm install y npm run dev
5. Acceder a las rutas mediante localhost en el puerto 3000

Rutas de la API
## Auth
- POST /api/auth/register
- POST /api/auth/login

Ejemplo json de POST
{
    "nombre": "",
    "correo": "",
    "contrasena": "",
}

## Tareas (JWT requerido)
- GET /api/tareas
- POST /api/tareas
- PUT /api/tareas/:id
- DELETE /api/tareas/:id

{
  "id": 1,
  "id_usuario": 3,
  "titulo": "Comprar refacciones",
  "descripcion": "Comprar aceite y filtros",
  "estado": "Pendiente"
}


