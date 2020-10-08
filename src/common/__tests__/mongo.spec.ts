import { MongoMemoryServer } from 'mongodb-memory-server';
import { connectMongo } from '../mongo';
import mongoose from 'mongoose';

describe('dbConnect', () => {
  describe('connectMongo', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    let mongod: MongoMemoryServer;

    beforeEach(() => {
      mongod = new MongoMemoryServer();
    });

    afterEach(() => {
      mongod.stop();
    });

    it(`should reject if MONGO_DB_NAME is not provided`, async () => {
      process.env.MONGO_DB_NAME = '';
      process.env.MONGO_URI = 'localhost:27017';
      const error = await connectMongo().catch(error => error);
      expect(error).toBeDefined();
    });

    it(`should reject if MONGO_URI is not provided`, async () => {
      process.env.MONGO_URI = '';
      process.env.MONGO_DB_NAME = 'foo';
      const error = await connectMongo().catch(error => error);
      expect(error).toBeDefined();
    });

    it(`should throw error if has any error event in connection`, async () => {
      jest.spyOn(mongoose, 'connect').mockImplementationOnce((): any => {
        mongoose.connection.emit('error', new Error());
        return new Promise(resolve => {
          resolve();
        });
      });
      process.env.MONGO_DB_NAME = 'test_db';
      process.env.MONGO_URI = 'localhost';
      const error = await connectMongo().catch(error => error);
      expect(error).toBeDefined();
    });
  });
});
