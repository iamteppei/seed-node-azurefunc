import { handler } from '../api';
import { getContextObject } from '../__mocks__/data.data';
jest.mock('../../common/mongo.ts', () => ({
  connectMongo: jest.fn()
}));
describe('functions', () => {
  it('Call success app', done => {
    const context = getContextObject();
    context.res = {};
    context.done = function() {
      expect(this.res).toBeDefined();
      done();
    };
    handler(context, { originalUrl: 'http://localhost:7071/api/v1/ping' });
  });
});
