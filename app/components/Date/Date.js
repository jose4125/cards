import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

export default ({ date, style }) => (
  <Text style={style}>{moment(date).format('ll')}</Text>
);
