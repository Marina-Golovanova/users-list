import React from 'react';

import styles from './input.module.scss';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input(props, ref) {
  const { children, ...rest } = props;

  return (
    <label className={styles.label}>
      <input className={styles.input} ref={ref} {...rest} />
      {children && <div className={styles.inputChildren}>{children}</div>}
    </label>
  );
});
