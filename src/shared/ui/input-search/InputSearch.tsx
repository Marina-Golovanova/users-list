import React from 'react';
import { ButtonIcon } from '../button-icon/ButtonUcon';
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
  const [value, setValue] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e);
    setValue(e.target.value);
  };

  return (
    <Input ref={ref} {...props} onChange={handleInputChange}>
      <ButtonIcon
        onClick={() => props.onSearchButtonClick?.(value)}
        icon={<SearchIcon className={styles.inputSearchIcon} />}
      />
    </Input>
  );
});
