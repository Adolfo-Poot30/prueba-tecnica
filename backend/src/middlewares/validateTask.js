module.exports = (req, res, next) => {
  const { titulo, estado } = req.body;

  if (!titulo || titulo.trim() === '') {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  if (!estado || !['pendiente', 'completada'].includes(estado)) {
    return res.status(400).json({
      error: 'Estado inválido (pendiente | completada)'
    });
  }

  next();
};

