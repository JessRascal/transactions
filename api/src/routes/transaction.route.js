import { Router } from 'express';
import transactions from '../controllers/transaction.controller';

const router = Router();

// POST /transactions/
router.post('/', transactions.create);

// GET /transactions/
router.get('/', transactions.findAll);

// GET /transactions/:id
router.get('/:id', transactions.findOne);

// PATCH /transactions/:id
router.patch('/:id', transactions.update);

// DELETE /transactions/:id
router.delete('/:id', transactions.delete);

export default router;
