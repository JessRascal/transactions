import { Router } from 'express';
import types from '../controllers/bankAccountType.controller';

const router = Router();

// POST /bankaccounttypes/
router.post('/', types.create);

// GET /bankaccounttypes/
router.get('/', types.findAll);

// GET /bankaccounttypes/:id
router.get('/:id', types.findOne);

// PATCH /bankaccounttypes/:id
router.patch('/:id', types.update);

// DELETE /bankaccounttypes/:id
router.delete('/:id', types.delete);

export default router;
