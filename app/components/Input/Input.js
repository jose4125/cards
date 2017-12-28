import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

export default ({ value, secureTextEntry, onChangeText, ...restInput }) => {
  return (
    <TextInput
      style={styles.default}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      {...restInput}
    />
  );
};
