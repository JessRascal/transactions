import express from 'express';
import user from './user.route';
import transaction from './transaction.route';
import bankAccountTypes from './bankAccountType.route';
import transactionCategories from './transactionCategory.route';

const router = express.Router();

router.get('/', (req, res) => res.json({ message: `API: Yes, I'm awake` }));
router.use('/users', user);
router.use('/transactions', transaction);
router.use('/bankaccounttypes', bankAccountTypes);
router.use('/transactionCategories', transactionCategories);

export default router;
