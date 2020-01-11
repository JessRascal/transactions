import { Router } from 'express';

const router = Router();

// GET /users/
router.get('/', (req, res) => {
  res.json({ message: `Getting all users` });
});

// GET /users/:id
router.get('/:id', (req, res) => {
  // get user details
  // console.log(`Endpoint test. ID: ${req.params.id}`);
  res.json({ message: `Endpoint test. ID: ${req.params.id}` });
});

// BANK ACCOUNT ENDPOINTS
// GET /users/:id/bankaccounts/
router.get('/:id/bankaccounts/', (req, res) => {
  // return all bank accounts for a user
});

export default router;
