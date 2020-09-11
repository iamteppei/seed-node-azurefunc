const handler = require('azure-aws-serverless-express');
import app from '../app';

const h = handler(app);
export { h as handler };
