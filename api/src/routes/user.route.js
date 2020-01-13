import { Router } from 'express';
import users from '../controllers/user.controller';

const router = Router();

// POST /users/
router.post('/', users.create);

// GET /bankaccounttypes/
router.get('/', users.findAll);

// DELETE /users/:id
router.delete('/:userId', users.delete);

// MIDDLEWARE: get user details
router.use('/:userId', users.findUser)

// GET /users/:id
router.get('/:userId', users.findOne);

// PUT /users/:id
router.put('/:userId', users.update); // TODO: change to PATCH

export default router;
