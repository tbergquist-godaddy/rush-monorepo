// @flow

import * as React from 'react';
import { Heading, Input, FormGroup, Button } from '@tbergq/components';
import fbt from 'fbt';
import * as sx from '@adeira/sx';
import { graphql, useMutation } from 'react-relay/hooks';

import useInjectSxStyles from '../components/useInjectSxStyles';
import type { signupMutation as SignupMutation } from './__generated__/signupMutation.graphql';

export default function Signup(): React.Node {
  useInjectSxStyles();
  const [signUp, isLoading] = useMutation<SignupMutation>(graphql`
    mutation signupMutation($password: String!, $email: String!) {
      createAccount(password: $password, email: $email) {
        ... on Identity {
          __typename
        }
        ... on Error {
          message
        }
      }
    }
  `);

  const [email, setEmail] = React.useState('test@test.no');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    signUp({
      variables: { password, email },
      onCompleted: (res, err) => {
        if (res.createAccount.message != null || err != null) {
          // eslint-disable-next-line no-alert
          alert('fail');
        } else {
          // eslint-disable-next-line no-alert
          alert('ok');
        }
      },
    });
  };

  return (
    <form action="#" noValidate onSubmit={onSubmit}>
      <Heading level="h1">
        <fbt desc="Create new account title">Create new account</fbt>
      </Heading>
      <FormGroup>
        <Input value={email} onChange={(e) => setEmail(e.currentTarget.value)} label="email" />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          label="password"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.currentTarget.value)}
          label="confirm password"
        />
      </FormGroup>
      <div className={styles('buttonContainer')}>
        <Button type="submit">
          {isLoading ? (
            'loading...'
          ) : (
            <fbt desc="Submit button to create an account">Create account</fbt>
          )}
        </Button>
      </div>
    </form>
  );
}

const styles = sx.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
