import * as mongoose from 'mongoose';

const connection = mongoose.createConnection();

mongoose.set('debug', false);

export default connection;
