import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default ({ children, type }) => {
  const elementStyles = [styles.default];

  if (type) {
    elementStyles.push(styles[type]);
  }

  return (
    <Text style={elementStyles}>{children}</Text>
  );
};
