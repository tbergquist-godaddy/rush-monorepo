// @flow

import * as React from 'react';
import { useHref } from 'react-router-dom';
import fbt from 'fbt';
import { Heading, Link, Text } from '@tbergq/components';

import useInjectSxStyles from '../components/useInjectSxStyles';
import LoginForm from './login-form';

export default function Login(): React.Node {
  useInjectSxStyles();
  const href = useHref('/signup');

  return (
    <div>
      <Heading level="h1">
        <fbt desc="login header">Login</fbt>
      </Heading>
      <LoginForm />
      <div>
        <Text>
          <fbt desc="signup description">Don&apos;t have an account?</fbt>
        </Text>{' '}
        <Link href={href}>
          <fbt desc="Signup link">Sign up</fbt>
        </Link>
      </div>
    </div>
  );
}
