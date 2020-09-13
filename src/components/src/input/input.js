// @flow

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  +value: string,
  +onChange: (SyntheticEvent<HTMLInputElement>) => void,
  +label: React.Node,
  +type?: 'text' | 'password',
};

export default function Input({ value, onChange, label, type = 'text' }: Props): React.Node {
  return (
    <label>
      <div className={styles('label')}>{label}</div>
      <input className={styles('input')} type={type} value={value} onChange={onChange} />
    </label>
  );
}

const styles = create({
  label: {
    marginBottom: 'var(--space-small)',
  },
  input: {
    borderRadius: 'var(--border-radius-normal)',
    padding: 'var(--space-normal)',
    border: '1px solid var(--color-gray-light)',
    width: '100%',
  },
});
