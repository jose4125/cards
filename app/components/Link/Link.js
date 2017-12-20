import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

import styles from './styles';

export default ({ type, children }) => {
  const elementStyle = [styles.default];
  const textElementStyle = [styles.text];

  if (type) {
    elementStyle.push(styles[type]);
    textElementStyle.push(styles[`${type}Text`]);
  }

  return (
    <TouchableWithoutFeedback style={elementStyle}>
      <View>
        <Text style={textElementStyle}>{ children }</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
