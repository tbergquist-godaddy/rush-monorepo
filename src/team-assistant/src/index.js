// @flow strict-local

import * as React from 'react';
import { render } from 'react-dom';
import * as sx from '@adeira/sx';

import './app.css';

export function App(): React.Node {
  return (
    <div data-testid="app" className={styles('container')}>
      <div>
        <h1 className={styles('header')}>TODO</h1>
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
    padding: '16px',
  },
});

const sxStyleTags = sx.renderPageWithSX(() => {}).styles;
const head = document.head;

for (const style of sxStyleTags) {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = style.props.children;
  styleTag.setAttribute('data-adeira-sx', 'true');

  if (head != null) {
    head.appendChild(styleTag);
  }
}

const root = document.querySelector('#root');

if (root != null) {
  render(<App />, root);
}
