// @flow strict-local

import * as React from 'react';
import { create } from '@adeira/sx';

import Spin from './spinner.svg';

type Props = {
  +size?: 'small' | 'normal' | 'large',
  +color?: 'primary' | 'white',
};

export default function Spinner({ size = 'normal', color = 'primary' }: Props): React.Node {
  return <Spin data-testid="spinner" className={`spinner spin-${color} ${styles(size)}`} />;
}

const styles = create({
  small: {
    height: 25,
    width: 25,
  },
  normal: {
    height: 50,
    width: 50,
  },
  large: {
    height: 100,
    width: 100,
  },
});
