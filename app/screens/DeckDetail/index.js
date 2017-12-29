import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation'

import styles from './styles';
import DeckInfo from '../../containers/DeckInfo';

class DeckDetail extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck.title}`,
  });
  
  render() {
    const deck = this.props.navigation.state.params.deck;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <DeckInfo id={deck.title} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default DeckDetail;