import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

export default ({ type, value, secureTextEntry, onChangeText, ...restInput }) => {
  const elementStyle = [styles.default];

  if (type) {
    elementStyle.push(styles[type]);
  }

  return (
    <TextInput
      style={elementStyle}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      {...restInput}
    />
  );
};
