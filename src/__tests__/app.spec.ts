import app from '../app';
import { connectMongo } from '../common/mongo';

jest.mock('../common/mongo', () => ({
  connectMongo: jest.fn()
}));

describe('Express server', () => {
  it('should log error if server start error', async done => {
    app.listen(() => {
      expect(connectMongo).toBeCalled();
      done();
    });
  });
});
