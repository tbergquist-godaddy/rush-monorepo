// @flow

import * as React from 'react';
import { render } from 'react-dom';
import * as sx from '@adeira/sx';
import '@tbergq/components/dist/theme.css';

import './app.css';
import App from './components/app';

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
