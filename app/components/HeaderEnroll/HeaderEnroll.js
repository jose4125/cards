import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import styles from './styles';

const HeaderEnroll = ({ handlePress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={handlePress}>
      <FontAwesome name="angle-left" size={35} color="#fff" />
    </TouchableOpacity>
  </View>
);

export default HeaderEnroll;
