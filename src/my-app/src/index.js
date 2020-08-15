// @flow strict

import * as React from 'react';
import { render } from 'react-dom';

function App() {
  return <div>hey you</div>;
}

const root = document.querySelector('#root');

if (root != null) {
  render(<App />, root);
}
