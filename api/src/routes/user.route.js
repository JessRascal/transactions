import { Router } from 'express';
import users from '../controllers/user.controller';

const router = Router();

// POST /users/
router.post('/', users.create);

// GET /bankaccounttypes/
router.get('/', users.findAll);

// GET /users/:id
router.get('/:userId', users.findUser, users.findOne);

// PATCH /users/:id
router.patch('/:userId', users.update);

// DELETE /users/:id
router.delete('/:userId', users.delete);

export default router;
