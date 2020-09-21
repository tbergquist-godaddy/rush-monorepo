// @flow

import * as React from 'react';
import { Heading, Input, FormGroup, Button } from '@tbergq/components';
import fbt from 'fbt';
import * as sx from '@adeira/sx';
import { graphql, useMutation } from 'react-relay/hooks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { object, string, ref } from 'yup';
import { useNavigate } from 'react-router-dom';

import useInjectSxStyles from '../components/useInjectSxStyles';
import type { signupMutation as SignupMutation } from './__generated__/signupMutation.graphql';

// $FlowFixMe[prop-missing]
const email = fbt('email', 'email form label');
// $FlowFixMe[prop-missing]
const password = fbt('password', 'password form label');
// $FlowFixMe[prop-missing]
const confirmPassword = fbt('confirm password', 'confirmPassword form label');
// $FlowFixMe[prop-missing]
const passwordsMustMatch = fbt('Passwords must match', 'password mismatch error message');

const schema = object().shape({
  password: string().required().label(password),
  confirmPassword: string()
    .label(confirmPassword)
    .required()
    .oneOf([ref('password'), null], passwordsMustMatch),
  email: string().required().email().label(email),
});

export default function Signup(): React.Node {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
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

  const onSubmit = ({ email, password }) => {
    signUp({
      variables: { password, email },
      onCompleted: (res, err) => {
        if (res.createAccount.message != null || err != null) {
          // eslint-disable-next-line no-alert
          alert('fail');
        } else {
          navigate('/login');
        }
      },
    });
  };

  return (
    <form action="#" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Heading level="h1">
        <fbt desc="Create new account title">Create new account</fbt>
      </Heading>
      <FormGroup error={errors.email?.message}>
        <Input ref={register} name="email" label={email} />
      </FormGroup>
      <FormGroup error={errors.password?.message}>
        <Input type="password" label={password} name="password" ref={register} />
      </FormGroup>
      <FormGroup error={errors.confirmPassword?.message}>
        <Input type="password" label={confirmPassword} name="confirmPassword" ref={register} />
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
