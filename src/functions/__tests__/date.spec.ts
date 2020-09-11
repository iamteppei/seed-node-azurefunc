import { getContextObject } from '../__mocks__/date.data';
import { handler } from '../date';

describe('functions date', () => {
  it('Call success app', done => {
    const context = getContextObject();
    context.done = function() {
      expect(this.res).toBeDefined();
      done();
    };
    handler(context);
  });
});
