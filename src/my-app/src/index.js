// @flow

import * as React from 'react';
import { render } from 'react-dom';
import theme from '@tbergq/theme';

type TestType = {
  +value: string,
};

function App() {
  const text: TestType = { value: 'hey you' };
  return (
    <div>
      {text.value}
      <div>
        This is your theme <br />
        <span
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(theme, null, 2).replace(/\n/g, '<br />'),
          }}
        />
      </div>
    </div>
  );
}

const root = document.querySelector('#root');

if (root != null) {
  render(<App />, root);
}
