// @flow

import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import * as sx from '@adeira/sx';
import { Navbar, breakpoints } from '@tbergq/components';
import { init, IntlVariations } from 'fbt';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import translations from '../../translatedFbts.json';
import Routes from './router';
import environment from '../relay/environment';

function getLanguage() {
  if (navigator.language.startsWith('es')) {
    return 'es_PE';
  }
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
    <RelayEnvironmentProvider environment={environment}>
      <Router>
        <Navbar brand="Team assistant" />
        <div data-testid="app" className={styles('container')}>
          <Routes />
        </div>
      </Router>
    </RelayEnvironmentProvider>
  );
}

const styles = sx.create({
  container: {
    padding: 'var(--space-large)',
    margin: '0 auto',
    [breakpoints.tablet]: {
      width: '750px',
    },
    [breakpoints.desktop]: {
      width: '970px',
    },
    [breakpoints.largeDesktop]: {
      width: '1170px',
    },
  },
});
