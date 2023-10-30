import React from 'react';
import { SearchIcon } from '../icons/SearchIcon';
import { Input } from '../input/Input';

import styles from './input-search.module.scss';

export type IInputSearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onSearchButtonClick?: (value: string) => void;
};

export const InputSearch = React.forwardRef<
  HTMLInputElement,
  IInputSearchProps
>(function InputSearch(props, ref) {
  return (
    <Input ref={ref} {...props}>
      <SearchIcon className={styles.inputSearchIcon} />
    </Input>
  );
});
