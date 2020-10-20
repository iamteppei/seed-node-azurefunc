import express from 'express';
import bodyParser from 'body-parser';
import { router } from '../routes';
import { response } from '../common/response';

const app: express.Application = express();
app.use(bodyParser.json());
app.use('', router);
app.use(response);
export default app;
