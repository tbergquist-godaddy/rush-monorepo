// @flow

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: React.Node,
};

export default function Button({ children }: Props): React.Node {
  return (
    <button type="button" className={styles('button')}>
      {children}
    </button>
  );
}

const styles = create({
  button: {
    color: 'blue',
  },
});
