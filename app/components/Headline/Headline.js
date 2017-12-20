import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default ({ children }) => (
  <Text style={styles.header}>{ children }</Text>
);

