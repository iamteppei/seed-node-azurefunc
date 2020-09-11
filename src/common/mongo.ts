import { connect, connection } from 'mongoose';

export const MONGO_USER_PARAM = 'MONGO_USER';
export const MONGO_PASS_PARAM = 'MONGO_PASS';
export const MONGO_DB_NAME = 'MONGO_DB_NAME';
export const MONGO_HOSTS = 'MONGO_HOSTS';

export const connectMongo = (): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    const user = process.env.MONGO_USER_PARAM || '';
    const pass = process.env.MONGO_PASSWORD || '';
    const dbName = process.env.MONGO_DB_NAME || '';
    const host = process.env.MONGO_HOSTS || '';

    const dbUri = `mongodb://${user}:${pass}@${host}/${dbName}`;

    if (!dbName) {
      return reject(`No ${MONGO_DB_NAME} is provided`);
    }

    connection.once('open', () => resolve());

    connection.on('error', err => {
      reject(err);
    });

    connect(dbUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      user,
      pass,
      dbName
    });
  });
