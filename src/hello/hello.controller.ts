import { Router, Response, Request } from 'express';
import helloService from './hello.service';
import { createValidator, ValidatedRequest } from 'express-joi-validation';
import { helloCreationValidator } from './hello.validator';
import { HelloCreationRequestSchema } from './hello.type';

const validator = createValidator({ passError: true });
const router = Router();

router
  .get('/:name', (req: Request, res: Response) => {
    const result = helloService.getSayHelloByName(req.params.name);
    res.send(result);
  })
  .get('/', async (_: Request, res: Response) => {
    const result = await helloService.getSayHelloWords();
    res.send(result);
  })
  .post(
    '/',
    validator.body(helloCreationValidator),
    async (
      req: ValidatedRequest<HelloCreationRequestSchema>,
      res: Response
    ) => {
      const result = await helloService.addHelloWord(req.body.name);
      res.send(result);
    }
  );

export default router;
