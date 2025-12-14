const db = require('../config/database');

exports.getAll = (callback) => {
  db.all('SELECT * FROM tasks', callback);
};

exports.getById = (id, callback) => {
  db.get('SELECT * FROM tasks WHERE id = ?', [id], callback);
};

exports.create = (task, callback) => {
  const { titulo, descripcion, estado } = task;
  db.run(
    'INSERT INTO tasks (titulo, descripcion, estado) VALUES (?, ?, ?)',
    [titulo, descripcion, estado],
    function (err) {
      callback(err, { id: this.lastID });
    }
  );
};

exports.update = (id, task, callback) => {
  const { titulo, descripcion, estado } = task;
  db.run(
    'UPDATE tasks SET titulo=?, descripcion=?, estado=? WHERE id=?',
    [titulo, descripcion, estado, id],
    callback
  );
};

exports.delete = (id, callback) => {
  db.run('DELETE FROM tasks WHERE id=?', [id], callback);
};
