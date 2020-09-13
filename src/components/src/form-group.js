// @flow

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: React.Node,
};

export default function FormGroup({ children }: Props): React.Node {
  return <div className={styles('formGroup')}>{children}</div>;
}

const styles = create({
  formGroup: {
    marginBottom: 'var(--space-small)',
  },
});
