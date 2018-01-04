import React from 'react';
import { View, StatusBar } from 'react-native';

import AddCardForm from '../../containers/AddCardForm';

import styles from './styles';

export class AddCard extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <AddCardForm navigation={this.props.navigation} />
      </View>
    );
  }
}

export default AddCard;
