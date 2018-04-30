/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ContainerBox.scss';

type Option = {
  value: string,
  text: string
};
type Props = {
  options: Array<Option>,
  onSelectionChange: Function
};

const Dropdown = ({ options, onSelectionChange }: Props) => {
  return (
    <select onChange={onSelectionChange}>
      {options.map(({ value, text }) => {
        return <option value={value}>{text}</option>;
      })}
    </select>
  );
};

export default Dropdown;
