const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.controller');
const validateTask = require('../middlewares/validateTask');

router.get('/', controller.getTasks);
router.get('/:id', controller.getTask);
router.post('/', validateTask, controller.createTask);
router.put('/:id', validateTask, controller.updateTask);
router.delete('/:id', controller.deleteTask);

module.exports = router;

