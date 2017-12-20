import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default ({ item, selectedFi, handleChangeFi }) => {
  return (
    <TouchableHighlight onPress={handleChangeFi}>
      <View style={styles.finantialItem}>
        <Text style={styles.finantialText}>{item}</Text>
        {(selectedFi === item) ? <Ionicons name="ios-checkmark" size={37} color="#fff" /> : null}
      </View>
    </TouchableHighlight>
  )
}
