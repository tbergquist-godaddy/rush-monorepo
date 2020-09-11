// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Login(): React.Node {
  return (
    <div>
      <h1>Login TODO</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}
