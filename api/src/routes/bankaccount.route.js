import { Router } from 'express';
import bankAccounts from '../controllers/bankAccount.controller';
import { findAccounts } from '../middleware/bankAccount.middleware';

const router = Router({ mergeParams: true });

// POST /users/:userId/bankaccounts/
router.post('/', bankAccounts.create);

// MIDDLEWARE: get user details
router.use('/', findAccounts);

// GET /users/:userId/bankaccounts/
router.get('/', bankAccounts.findAll);

// GET /users/:userId/bankaccounts/:accountId/
router.get('/:accountId', bankAccounts.findOne);

// PATCH /users/:userId/bankaccounts/:accountId/
router.patch('/:accountId', bankAccounts.update);

// DELETE /users/:userId/bankaccounts/:accountId/
router.delete('/:accountId', bankAccounts.delete);

export default router;
