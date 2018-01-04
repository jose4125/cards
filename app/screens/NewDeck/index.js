import React from 'react';
import { View, StatusBar } from 'react-native';

import NewDeckForm from '../../containers/NewDeckForm';

import styles from './styles';

export class NewDeck extends React.PureComponent {
  render() {
    
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <NewDeckForm navigation={this.props.navigation} />
      </View>
    );
  }
}

export default NewDeck;
