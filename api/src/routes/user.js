import { Router } from 'express';

const router = Router();

// GET: /users/:id
router.get('/:id', (req, res) => {
  // get user details
  console.log(`Endpoint test. ID: ${req.id}`);
});

// GET: /users/:id/bankaccounts/
router.get('/:id/bankaccounts/', (req, res) => {
  // return all bank accounts for a user
});

export default router;
