import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationActions } from 'react-navigation'

import styles from './styles';
import Questions from '../../containers/Questions';

class Quiz extends React.PureComponent {
  render() {
    const deck = this.props.navigation.state.params.deck;
    const questions = this.props.navigation.state.params.deck.questions;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Questions questions={questions} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Quiz;
