// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home(): React.Node {
  return (
    <div>
      <h1>Home TODO</h1>
      <Link to="/login">Go home</Link>
    </div>
  );
}
