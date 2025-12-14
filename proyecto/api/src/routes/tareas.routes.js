import { Router } from 'express';
import {
getTareas,
createTarea,
updateTarea,
deleteTarea
} from '../controllers/tareas.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';


const router = Router();


router.use(authMiddleware);


router.get('/', getTareas);
router.post('/', createTarea);
router.put('/:id', updateTarea);
router.delete('/:id', deleteTarea);


export default router;
