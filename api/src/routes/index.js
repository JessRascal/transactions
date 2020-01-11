// import ping from './ping.route';
import express from 'express';
import user from './user.route';
import transaction from './transaction.route';

const router = express.Router();

router.get('/', (req, res) => res.json({ message: `API: Yes, I'm awake` }));
router.use('/users', user);
router.use('/transactions', transaction);

export default router;
