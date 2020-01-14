import { Router } from 'express';
import users from '../controllers/user.controller';
import bankAccounts from '../controllers/bankAccount.controller';

const router = Router({ mergeParams: true });

// PATCH /users/:userId/bankaccounts/:accountId/
router.patch('/:accountId', bankAccounts.update);

// DELETE /users/:userId/bankaccounts/:accountId/
router.delete('/:accountId', bankAccounts.delete);

// MIDDLEWARE: get user details
router.use('/', users.findUser)

// POST /users/:userId/bankaccounts/
router.post('/', bankAccounts.create);

// GET /users/:userId/bankaccounts/
router.get('/', bankAccounts.findAll);

// GET /users/:userId/bankaccounts/:accountId/
router.get('/:accountId', bankAccounts.findOne);

export default router;
