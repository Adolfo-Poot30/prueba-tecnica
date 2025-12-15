En esta API se resolvió el ejercicio: 

-Desarrolla una API RESTful sencilla que permita crear, leer, actualizar y eliminar (CRUD) registros de "Tareas" (tasks). Cada tarea debe tener un id, titulo, descripcion y estado.
-Implementa validación de datos utilizando middleware.

La base de datos utilizada es SQL Lite

Para ejecutar el proyecto
1. Descargar  y abrir la terminal en el directorio del proyecto.
2. Ejecutar npm install para descargar dependencias
3. Ejecutar npm run dev
4. Usar las rutas en localhost puerto 3000 con la ruta api/tasks/

ejemplo de json para post
{
  "titulo": "",
  "descripcion": "",
  "estado": "pendiente",
} 
estado solo puede ser pendiente o completada
