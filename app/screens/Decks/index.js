import React from 'react';
import { View, StatusBar } from 'react-native';

import styles from './styles';
import DecksList from '../../containers/DecksList';

function Decks(props) {
  return (
    <View style={styles.home}>
      <StatusBar barStyle="dark-content" />
      <DecksList navigation={props.navigation} />
    </View>
  );
}

export default Decks;
