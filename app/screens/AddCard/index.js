import React from 'react';
import { View, StatusBar } from 'react-native';

import AddCardForm from '../../containers/AddCardForm';

import styles from './styles';

export class AddCard extends React.PureComponent {
  render() {
    console.log('props', this.props.navigation.state.params);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View>
          <AddCardForm navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

export default AddCard;
