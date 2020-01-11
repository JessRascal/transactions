import { Router } from 'express';
import categories from '../controllers/transactionCategory.controller';

const router = Router();

// POST /transactioncategories/
router.post('/', categories.create);

// GET /transactioncategories/
router.get('/', categories.findAll);

// GET /transactioncategories/:id
router.get('/:id', categories.findOne);

// PUT /transactioncategories/:id
router.put('/:id', categories.update); // TODO: change to PATCH

// DELETE /transactioncategories/:id
router.delete('/:id', categories.delete);

export default router;
