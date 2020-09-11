import healthCheck from './healthCheck/healthCheck.controller';
import hello from './hello/hello.controller';

import { Router } from 'express';
const router = Router();

router.use('/ping/', healthCheck);
router.use('/hello/', hello);

export { router };
