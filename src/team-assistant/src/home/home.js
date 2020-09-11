// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Home(): React.Node {
  return (
    <div>
      <div>Home TODO</div>
      <Link to="/login">Go home</Link>
    </div>
  );
}
