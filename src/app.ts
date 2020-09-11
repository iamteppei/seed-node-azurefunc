import express from 'express';
import { router } from './routes';
import bodyParser from 'body-parser';
import { response } from './common/response';
import { connectMongo } from './common/mongo';

const app: express.Application = express();
app.use(bodyParser.json());

app.use(process.env.API_ROUTE || '', router);
app.use(response);

const init = async () => {
  await connectMongo();
};
init();

export default app;
