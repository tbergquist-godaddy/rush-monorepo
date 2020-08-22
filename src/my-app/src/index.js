// @flow strict-local

import * as React from 'react';
import { render } from 'react-dom';
import theme from '@tbergq/theme';
import * as sx from '@adeira/sx';

import './app.css';

export function App(): React.Node {
  return (
    <div data-testid="app" className={styles('container')}>
      <div>
        <h1 className={styles('header')}>This is your theme</h1>
        <span
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(theme, null, 2).replace(/\n/g, '<br />'),
          }}
        />
      </div>
    </div>
  );
}

const styles = sx.create({
  header: {
    fontSize: 30,
    color: 'red',
  },
  container: {
    padding: theme.spacing.increased,
  },
});

const styleTag = document.createElement('style');
styleTag.innerHTML = sx.renderStatic(() => {}).css;
const head = document.head;

if (head != null) {
  head.appendChild(styleTag);
}

const root = document.querySelector('#root');

if (root != null) {
  render(<App />, root);
}
