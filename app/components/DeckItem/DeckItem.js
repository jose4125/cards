import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text style={styles.title}>{props.data.title}</Text>
    <Text style={styles.info}>{props.data.questions.length} cards</Text>
  </TouchableOpacity>
)