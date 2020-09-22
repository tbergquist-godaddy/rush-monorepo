// @flow

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: React.Node,
  +align?: 'right',
};

export default function FormGroup({ children, align }: Props): React.Node {
  return <div className={styles('formGroup', align)}>{children}</div>;
}

const styles = create({
  formGroup: {
    marginBottom: 'var(--space-small)',
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
