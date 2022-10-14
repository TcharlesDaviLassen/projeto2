import cors from 'cors';
import express, { } from 'express';

import routerUsers from './users';
import routerLogin from './login';

const router = express.Router();
router.use(cors());

router.use(routerLogin);
router.use(routerUsers);

export default router;
