import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';
import { response } from './common/response';
import { connectMongo } from './common/mongo';

const app: express.Application = express();
app.use(bodyParser.json());

app.use('', router); // this should be the same value with routePrefix in host.json file
app.use(response);

const init = async () => {
  await connectMongo();
};
init();

export default app;
