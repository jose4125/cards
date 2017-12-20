import React from 'react';
import { View, Text, Image } from 'react-native';

import { Date } from '../../components/Date';
import styles from './styles';

export default props => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      {props.data.multiplier > 0 && (<View style={styles.tag}>
        <Text style={styles.multiplier}>{props.data.multiplier}X</Text>
      </View>)}
      <Text style={styles.title}>{props.data.title}</Text>
    </View>
    <View style={styles.pointsContainer}>
      <View>
        <Date style={styles.info} date={props.data.date} />
        <Text style={styles.info}>${props.data.transactionAmount}</Text>
      </View>
      <Text style={styles.points}>{props.data.points} pts</Text>
    </View>
    <View style={styles.separator}></View>
  </View>
)