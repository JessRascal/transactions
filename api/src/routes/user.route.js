import { Router } from 'express';
import users from '../controllers/user.controller';

const router = Router();

// POST /users/
router.post('/', users.create);

// GET /users/:id
router.get('/:id', users.findUser, users.findOne);

// PUT /users/:id
router.put('/:id', users.findUser, users.update); // TODO: change to PATCH

// DELETE /users/:id
router.delete('/:id', users.findUser, users.delete);

export default router;
