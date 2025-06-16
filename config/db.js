import mongoose from 'mongoose';
import { DatabaseUrl } from '../data/index.js';

export default (callback) => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(DatabaseUrl, { useNewUrlParser: true })
    .then(() => {
      console.log('Connected to the database successfully.');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
    });

  const db = mongoose.connection;
  db.on('error', (err) => {
    console.error('Database connection error:', err);
  });

  db.once('open', () => {
    // Database is connected, now you can execute your callback function.
    callback(db);
  });
};
