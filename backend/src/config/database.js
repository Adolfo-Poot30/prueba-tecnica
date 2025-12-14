const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./tasks.db', (err) => {
  if (err) {
    console.error('Error al conectar DB', err);
  } else {
    console.log('SQLite conectada');
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descripcion TEXT,
    estado TEXT NOT NULL
  )
`);

module.exports = db;

