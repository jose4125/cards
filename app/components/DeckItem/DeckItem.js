import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default props => (
  <TouchableOpacity >
    <Text>{props.title}</Text>
    <Text>{props.questions.length} cards</Text>
  </TouchableOpacity>
)