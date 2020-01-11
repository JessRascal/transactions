import { Router } from 'express';
import users from '../controllers/user.controller';
import bankAccounts from '../controllers/bankAccount.controller';

const router = Router();

// user endpoints
// POST /users/
router.post('/', users.create);

// GET /users/:id
router.get('/:id', users.findOne);

// PUT /users/:id
router.put('/:id', users.update); // TODO: change to PATCH

// DELETE /users/:id
router.delete('/:id', users.delete);

// bank account endpoints
// POST /users/bankaccounts/
router.post('/:id/bankaccounts', bankAccounts.create);

// GET /users/bankaccounts/
router.get('/:id/bankaccounts', bankAccounts.findAll);

// GET /users/bankaccounts/:id
router.get('/:id/bankaccounts/:accountId', bankAccounts.findOne);

// PUT /users/bankaccounts/:id
router.put('/:id/bankaccounts/:accountId', bankAccounts.update); // TODO: change to PATCH

// DELETE /users/bankaccounts/:id
router.delete('/:id/bankaccounts/:accountId', bankAccounts.delete);

export default router;
