// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import fbt from 'fbt';

export default function Home(): React.Node {
  return (
    <div>
      <h1>
        <fbt desc="Todo text">Home TODO</fbt>
      </h1>
      <Link to="/login">Go home</Link>
    </div>
  );
}
