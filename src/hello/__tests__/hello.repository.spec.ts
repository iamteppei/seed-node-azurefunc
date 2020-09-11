import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { HelloModel } from '../hello.model';
import helloRepository from '../hello.repository';

describe('hello.repository', () => {
  let mongod: MongoMemoryServer;
  beforeAll(async () => {
    mongod = new MongoMemoryServer();
    const mongoDbUri = await mongod.getConnectionString();
    await mongoose.connect(mongoDbUri, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
  });

  afterEach(async () => {
    expect.hasAssertions();
    await HelloModel.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
  });

  describe('createHello', () => {
    it('Create success with correct input', async () => {
      // Given
      const word = 'name';
      // When
      const result = await helloRepository.createHello(word);
      // then
      expect(result).toEqual(expect.objectContaining({ word: 'name' }));
    });
  });

  describe('getHelloData', () => {
    it('Get data success when have 2 row', async () => {
      // Given
      await new HelloModel({ word: 'new' }).save();
      await new HelloModel({ word: 'new2' }).save();
      // When
      const result = await helloRepository.getHelloData();
      // then
      expect(result).toHaveLength(2);
    });
  });
});
