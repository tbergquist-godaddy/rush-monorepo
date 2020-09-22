import * as mongoose from 'mongoose';
import * as crypto from 'crypto';

import connection from '../connection';

const genRandomString = (length: number) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
};

function generateSalt(length: number): string {
  return genRandomString(length);
}

function encryptPassword(password: string, salt: string): string {
  const hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  return hash.digest('hex');
}

const UserSchema = new mongoose.Schema<IUser>({
  _id: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
});

UserSchema.pre('save', function (next) {
  this._id = (<any>this).email;
  next();
});

export interface IUser extends mongoose.Document {
  email: string;
  password: string;
  salt: string;
}

type CreateUserInput = {
  email: string;
  password: string;
};

class UserDoc extends mongoose.Model {
  password: string;
  email: string;

  static async createUser(input: CreateUserInput): Promise<UserDoc> {
    const salt = generateSalt(16);
    const password = encryptPassword(input.password, salt);
    const user = await this.create({
      email: input.email.toLowerCase(),
      password,
      salt,
    });
    return user.toObject({ virtuals: false });
  }

  static async getByEmail(email: string): Promise<UserDoc | null> {
    const user = await this.findById(email.toLowerCase());
    return user;
  }

  static async verifyPassword(email: string, password: string): Promise<UserDoc | null> {
    const user = await this.getByEmail(email.toLowerCase());
    if (user == null || user.password !== encryptPassword(password, user.salt)) {
      return null;
    }
    return user.toJSON();
  }
}

UserSchema.loadClass(UserDoc);

export default connection.model<IUser>('User', UserSchema);
