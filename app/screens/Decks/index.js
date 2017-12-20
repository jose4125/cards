import React from 'react';
import { View, StatusBar } from 'react-native';

import styles from './styles';
import DecksList from '../../containers/DecksList';

function Decks() {
  // goToLogIn() {
  //   this.props.navigation.navigate('LogIn');
  // }
  return (
    <View style={styles.home}>
      <StatusBar barStyle="dark-content" />
      <DecksList />
    </View>
  );
}

export default Decks;
