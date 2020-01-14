import { Router } from 'express';
import categories from '../controllers/transactionCategory.controller';

const router = Router();

// POST /transactioncategories/
router.post('/', categories.create);

// GET /transactioncategories/
router.get('/', categories.findAll);

// GET /transactioncategories/:id
router.get('/:id', categories.findOne);

// PATCH /transactioncategories/:id
router.patch('/:id', categories.update);

// DELETE /transactioncategories/:id
router.delete('/:id', categories.delete);

export default router;
