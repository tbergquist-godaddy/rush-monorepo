// @flow

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: React.Node,
  +variant?: 'primary' | 'secondary',
  +type?: 'button' | 'submit',
};

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
}: Props): React.Node {
  return (
    <>
      {/* eslint-disable-next-line react/button-has-type */}
      <button type={type} className={styles('button', variant)}>
        {children}
      </button>
    </>
  );
}

const styles = create({
  button: {
    padding: 'var(--space-small) var(--space-large)',
    color: 'var(--color-white)',
    border: 'none',
    borderRadius: 'var(--border-radius-normal)',
    outline: 'none',
    fontWeight: 500,
    ':focus': {
      boxShadow: 'var(--color-primary-focus) 0px 0px 0px 0.2rem',
    },
  },
  primary: {
    backgroundColor: 'var(--color-primary)',
  },
  secondary: {
    backgroundColor: 'var(--color-secondary)',
  },
});
