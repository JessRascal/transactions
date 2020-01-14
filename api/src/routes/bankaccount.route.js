import { Router } from 'express';
import users from '../controllers/user.controller';
import bankAccounts from '../controllers/bankAccount.controller';

const router = Router({ mergeParams: true });

// MIDDLEWARE: get user details
router.use('/', users.findUser);

// POST /users/:userId/bankaccounts/
router.post('/', bankAccounts.create);

// GET /users/:userId/bankaccounts/
router.get('/', bankAccounts.findAll);

// GET /users/:userId/bankaccounts/:accountId/
router.get('/:accountId', bankAccounts.findOne);

// PATCH /users/:userId/bankaccounts/:accountId/
router.patch('/:accountId', bankAccounts.update);

// DELETE /users/:userId/bankaccounts/:accountId/
router.delete('/:accountId', bankAccounts.delete);

export default router;
