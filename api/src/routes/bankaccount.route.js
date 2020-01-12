import { Router } from 'express';
import users from '../controllers/user.controller';
import bankAccounts from '../controllers/bankAccount.controller';

const router = Router({ mergeParams: true });

// get user details first
// router.use(users.findUser); // need to get all user details for all endpoints because already got id?

// POST /users/:userId/bankaccounts/
router.post('/', users.findUser, bankAccounts.create);

// GET /users/:userId/bankaccounts/
router.get('/', bankAccounts.findAll);

// GET /users/:userId/bankaccounts/:accountId/
router.get('/:accountId', users.findUser, bankAccounts.findOne);

// PUT /users/:userId/bankaccounts/:accountId/
router.put('/:accountId', bankAccounts.update); // TODO: change to PATCH

// DELETE /users/:userId/bankaccounts/:accountId/
router.delete('/:accountId', bankAccounts.delete);

export default router;
