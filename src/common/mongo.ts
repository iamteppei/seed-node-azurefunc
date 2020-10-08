import { connect, connection } from 'mongoose';

export const connectMongo = (): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    const dbName = process.env.MONGO_DB_NAME;
    const dbUri = process.env.MONGO_URI;

    if (!dbName) {
      return reject(`No MONGO_DB_NAME is provided`);
    }

    if (!dbUri) {
      return reject(`No MONGO_URI is provided`);
    }

    connection.once('open', () => resolve());

    connection.on('error', err => {
      reject(err);
    });

    connect(dbUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName
    });
  });
