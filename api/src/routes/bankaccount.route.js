import { Router } from 'express';
import users from '../controllers/user.controller';
import bankAccounts from '../controllers/bankAccount.controller';
import findUser from '../middleware/findUser.middleware';

const router = Router({ mergeParams: true });

// POST /users/:userId/bankaccounts/
router.post('/', bankAccounts.create);

// MIDDLEWARE: get user details
router.use('/', findUser);

// GET /users/:userId/bankaccounts/
router.get('/', bankAccounts.findAll);

// GET /users/:userId/bankaccounts/:accountId/
router.get('/:accountId', bankAccounts.findOne);

// PATCH /users/:userId/bankaccounts/:accountId/
router.patch('/:accountId', bankAccounts.update);

// DELETE /users/:userId/bankaccounts/:accountId/
router.delete('/:accountId', bankAccounts.delete);

export default router;
