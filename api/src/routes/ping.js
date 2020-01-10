import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send(`I can hear you`));

export default router;
