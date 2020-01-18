import { Router } from 'express';
import bankAccounts from '../controllers/bankAccount.controller';
import { findAccounts, findSingleAccount } from '../middleware/bankAccount.middleware';

const router = Router({ mergeParams: true });

// POST /users/:userId/bankaccounts/
router.post('/', bankAccounts.create);

// PATCH /users/:userId/bankaccounts/:accountId/
router.patch('/:accountId', findSingleAccount, bankAccounts.update);

// GET /users/:userId/bankaccounts/:accountId/
router.get('/:accountId', bankAccounts.findOne);

// MIDDLEWARE: get user details
router.use('/', findAccounts);

// GET /users/:userId/bankaccounts/
router.get('/', bankAccounts.findAll);

// DELETE /users/:userId/bankaccounts/:accountId/
router.delete('/:accountId', bankAccounts.delete);

export default router;
