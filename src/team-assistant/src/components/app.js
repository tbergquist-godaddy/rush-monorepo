// @flow

import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import * as sx from '@adeira/sx';
import { Navbar } from '@tbergq/components';

import Routes from './router';

export default function App(): React.Node {
  return (
    <Router>
      <Navbar brand="Team assistant" />
      <div data-testid="app" className={styles('container')}>
        <Routes />
      </div>
    </Router>
  );
}

const styles = sx.create({
  container: {
    padding: 'var(--space-large)',
  },
});
