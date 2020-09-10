// @flow

import * as React from 'react';
import { render } from 'react-dom';
import * as sx from '@adeira/sx';
import { Navbar } from '@tbergq/components';
import '@tbergq/components/dist/theme.css';
import { HashRouter } from 'react-router-dom';

import './app.css';
import Router from './components/router';

export function App(): React.Node {
  return (
    <HashRouter>
      <Navbar brand="Team assistant" />
      <div data-testid="app" className={styles('container')}>
        <Router />
      </div>
    </HashRouter>
  );
}

const styles = sx.create({
  container: {
    padding: 'var(--space-large)',
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
