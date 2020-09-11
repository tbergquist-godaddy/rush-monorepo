// @flow

import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import * as sx from '@adeira/sx';
import { Navbar } from '@tbergq/components';
import { init, IntlVariations } from 'fbt';

import translations from '../../translatedFbts.json';
import Routes from './router';

function getLanguage() {
  switch (navigator.language) {
    case 'nb':
    case 'no':
    case 'nb-NO':
      return 'nb_NO';
    default:
      return 'en_US';
  }
}

export default function App(): React.Node {
  React.useEffect(() => {
    init({
      translations,
      hooks: {
        getViewerContext: () => {
          return {
            locale: getLanguage(),
            GENDER: IntlVariations.GENDER_UNKNOWN,
          };
        },
      },
    });
  }, []);
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
