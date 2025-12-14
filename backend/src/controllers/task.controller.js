const Task = require('../models/task.model');

exports.getTasks = (req, res) => {
  Task.getAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.getTask = (req, res) => {
  Task.getById(req.params.id, (err, row) => {
    if (!row) return res.status(404).json({ message: 'No encontrada' });
    res.json(row);
  });
};

exports.createTask = (req, res) => {
  Task.create(req.body, (err, result) => {
    if (err) return res.status(400).json(err);
    res.status(201).json(result);
  });
};

exports.updateTask = (req, res) => {
  Task.update(req.params.id, req.body, (err) => {
    if (err) return res.status(400).json(err);
    res.json({ message: 'Actualizada' });
  });
};

exports.deleteTask = (req, res) => {
  Task.delete(req.params.id, (err) => {
    if (err) return res.status(400).json(err);
    res.json({ message: 'Eliminada' });
  });
};

