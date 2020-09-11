// @flow

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

const Login = React.lazy(() => import('../login/login'));
const Home = React.lazy(() => import('../home/home'));

export default function Router(): React.Node {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </React.Suspense>
  );
}
