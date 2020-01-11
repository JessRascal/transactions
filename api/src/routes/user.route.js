import { Router } from 'express';
import users from '../controllers/user.controller';
import bankAccounts from '../controllers/bankAccounts.controller';

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



// // GET /users/
// router.get('/', (req, res) => {
//   res.json({ message: `Getting all users` });
// });

// // GET /users/:id
// router.get('/:id', (req, res) => {
//   // get user details
//   // console.log(`Endpoint test. ID: ${req.params.id}`);
//   res.json({ message: `Endpoint test. ID: ${req.params.id}` });
// });

// // BANK ACCOUNT ENDPOINTS
// // GET /users/:id/bankaccounts/
// router.get('/:id/bankaccounts/', (req, res) => {
//   // return all bank accounts for a user
// });

export default router;
