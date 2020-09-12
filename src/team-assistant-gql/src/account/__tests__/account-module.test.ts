import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { AppModule } from '../../app-module';
import connection from '../../database/connection';
import UserModel from '../../database/models/users';

let app: INestApplication;

beforeAll(async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  app = moduleRef.createNestApplication();

  await app.init();
});

afterEach(async () => {
  try {
    await connection.collection('users').drop();
  } catch {
    // It might not exist
  }
});

afterAll(async () => {
  await app.close();
});

const email = 'test@test.no';
const password = '123321';
const query = `mutation createAccountMutation($password: String!, $email: String!) {
  createAccount(password:$password, email:$email) {
    ... on Identity {
      email
    }
    ... on CreateAccountError {
      reason
    }
  }
}`;

it(`creates a user`, async () => {
  await request(app.getHttpServer())
    .post('/graphql')
    .send({ query, variables: { email, password } })
    .expect(200)
    .expect({
      data: { createAccount: { email } },
    });
});

it('returns correct error for duplicate email', async () => {
  await (<any>UserModel).createUser({ email, password: '123' });
  await request(app.getHttpServer())
    .post('/graphql')
    .send({ query, variables: { email, password } })
    .expect(200)
    .expect({
      data: { createAccount: { reason: 'EMAIL_EXISTS' } },
    });
});

it('returns error for invalid email', async () => {
  await request(app.getHttpServer())
    .post('/graphql')
    .send({ query, variables: { email: 'lol', password } })
    .expect(200)
    .expect({
      data: { createAccount: { reason: 'INVALID_EMAIL' } },
    });
});

it('returns error for missing password', async () => {
  await request(app.getHttpServer())
    .post('/graphql')
    .send({ query, variables: { email, password: '' } })
    .expect(200)
    .expect({
      data: { createAccount: { reason: 'MISSING_PASSWORD' } },
    });
});
