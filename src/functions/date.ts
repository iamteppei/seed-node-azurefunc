import { AzureFunction, Context } from '@azure/functions';

const getDate: AzureFunction = async function(context: Context) {
  context.log('Typescript HTTP trigger function processed a request.');
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: `Today is ${new Date()}`
  };
  context.done();
};

export { getDate as handler };
