// @flow

import * as React from 'react';
import { render } from 'react-dom';

import { App } from '..';

let screen;

beforeEach(() => {
  screen = document.createElement('div');
  if (document.body != null) {
    document.body.appendChild(screen);
  }
});

afterEach(() => {
  if (document.body != null) {
    document.body.removeChild(screen);
  }
});

it('renders', () => {
  render(<App />, screen);

  expect(document.querySelector('[data-testid="app"')).not.toBeNull();
});
