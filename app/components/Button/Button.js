import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default ({ children, handleClick }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleClick}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
