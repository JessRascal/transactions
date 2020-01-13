import { Router } from 'express';
import users from '../controllers/user.controller';
import bankAccounts from '../controllers/bankAccount.controller';

const router = Router({ mergeParams: true });

// GET /users/:userId/bankaccounts/
router.get('/', bankAccounts.findAll);

// PUT /users/:userId/bankaccounts/:accountId/
router.put('/:accountId', bankAccounts.update); // TODO: change to PATCH

// DELETE /users/:userId/bankaccounts/:accountId/
router.delete('/:accountId', bankAccounts.delete);

// MIDDLEWARE: get user details
router.use('/', users.findUser)

// POST /users/:userId/bankaccounts/
router.post('/', bankAccounts.create);

// GET /users/:userId/bankaccounts/:accountId/
router.get('/:accountId', bankAccounts.findOne);

export default router;
