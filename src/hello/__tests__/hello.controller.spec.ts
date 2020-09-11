import helloService from '../hello.service';
import request from 'supertest';
import app from '../../__jest__/app';

jest.mock('../hello.service.ts');

describe('hello.controller', () => {
  describe('GET /hello', () => {
    it('Call success when input correctly', done => {
      // Given
      const result = [
        {
          word: 'test',
          __v: 0,
          id: '5f59949c2ea4975af758158b'
        },
        {
          word: 'test',
          __v: 0,
          id: '5f5994c1cc91405afee320dc'
        }
      ];
      (helloService.getSayHelloWords as jest.Mock).mockResolvedValueOnce(
        result
      );
      // When
      request(app)
        .get('/hello')
        .end(function(_, res) {
          // then
          expect(res.body).toEqual(result);
          done();
        });
    });
  });

  describe('GET /hello/:name', () => {
    it('Call success when input correctly', done => {
      // Given
      const name = 'test';
      (helloService.getSayHelloByName as jest.Mock).mockReturnValueOnce(name);
      // When
      request(app)
        .get('/hello/' + name)
        .end(function(_, res) {
          // then
          expect(res.status).toEqual(200);
          done();
        });
    });
  });

  describe('POST /hello', () => {
    it('Call success when input correctly', done => {
      // Given
      const body = { name: 'test' };
      (helloService.addHelloWord as jest.Mock).mockReturnValueOnce(body);
      // When
      request(app)
        .post('/hello')
        .send(body)
        .end(function(_, res) {
          // then
          expect(res.status).toEqual(200);
          expect(res.body).toEqual(body);
          done();
        });
    });

    it('Call success when input is not correct', done => {
      // Given
      const body = { test: 'test' };
      (helloService.getSayHelloByName as jest.Mock).mockReturnValueOnce(body);
      // When
      request(app)
        .post('/hello')
        .send({ test: 'test' })
        .set('Accept', 'application/json')
        .end(function(_, res) {
          // then
          expect(res.status).toEqual(400);
          expect(JSON.stringify(res.body)).toEqual(
            expect.stringContaining('\\"test\\" is not allowed')
          );
          done();
        });
    });
  });
});
