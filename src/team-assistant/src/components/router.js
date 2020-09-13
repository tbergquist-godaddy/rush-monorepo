// @flow

import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('../login/login'));
const Home = React.lazy(() => import('../home/home'));

export default function Router(): React.Node {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Suspense>
  );
}
