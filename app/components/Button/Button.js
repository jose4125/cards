import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default ({ children, type, handleClick, error, disabled }) => {
  const buttonStyles = [styles.default];

  if (type === 'secondary') {
    buttonStyles.push(styles[type]);
  }

  if (error) {
    buttonStyles.push(styles.error);
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={disabled ? 1 : 0.7}
      onPress={!disabled && handleClick}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
