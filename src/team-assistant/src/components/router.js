// @flow

import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export default function Router(): React.Node {
  return (
    <Switch>
      <Route path="/login">
        <div>Login TODO</div>
        <Link to="/">Go home</Link>
      </Route>
      <Route path="/">
        <div>Home TODO</div>
        <Link to="/login">Go to login</Link>
      </Route>
    </Switch>
  );
}
