import React from 'react';
import { View, StatusBar, Text } from 'react-native';

import styles from './styles';
import DeckInfo from '../../containers/DeckInfo';

function DeckDetail(props) {
  const deck = props.navigation.state.params.deck;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <DeckInfo id={deck.title} navigation={props.navigation} />
    </View>
  );
}

export default DeckDetail;