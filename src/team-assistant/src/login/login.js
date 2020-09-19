// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import fbt from 'fbt';

import useInjectSxStyles from '../components/useInjectSxStyles';

export default function Login(): React.Node {
  useInjectSxStyles();
  return (
    <div>
      <h1>
        <fbt desc="login todo">login TODO</fbt>
      </h1>
      <Link to="/">Go home</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}
