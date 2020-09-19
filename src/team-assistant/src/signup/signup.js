// @flow

import * as React from 'react';
import { Heading, Input, FormGroup } from '@tbergq/components';

import useInjectSxStyles from '../components/useInjectSxStyles';

export default function Signup(): React.Node {
  useInjectSxStyles();
  const [email, setEmail] = React.useState('test@test.no');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  return (
    <div>
      <Heading level="h1">Create new account</Heading>
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
    </div>
  );
}
