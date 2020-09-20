// @flow

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: React.Node,
  +error?: ?string,
};

export default function FormGroup({ children, error }: Props): React.Node {
  return (
    <div className={styles('formGroup')}>
      {children} {error != null && <div className={styles('error')}>{error}</div>}
    </div>
  );
}

const styles = create({
  formGroup: {
    marginBottom: 'var(--space-small)',
  },
  error: {
    color: 'var(--color-error)',
    fontSize: 'var(--text-size-small)',
    lineHeight: 1.75,
  },
});
