import { Router } from 'express';
import types from '../controllers/bankAccountType.controller';

const router = Router();

// POST /bankaccounttypes/
router.post('/', types.create);

// GET /bankaccounttypes/
router.get('/', types.findAll);

// GET /bankaccounttypes/:id
router.get('/:id', types.findOne);

// PUT /bankaccounttypes/:id
router.put('/:id', types.update); // TODO: change to PATCH

// DELETE /bankaccounttypes/:id
router.delete('/:id', types.delete);

export default router;
