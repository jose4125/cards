import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  makeSelectMemberNumber,
  makeSelectSSN,
} from '../../screens/Decks/selectors';
import { changeText } from '../../screens/Decks/actions';

import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { InfoText } from '../../components/InfoText';

import styles from './styles';

export class FinantialForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  handleChangeText(value, name) {
    this.props.onChangeText(value, name);
  }

  renderItem(item) {
    return (
      <TouchableHighlight>
        <View style={styles.finantialItem}>
          <Text style={styles.finantialText}>{item}</Text>
          <Ionicons name="ios-checkmark" size={37} color="#fff" />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.form}>
        <Label type="secondary">Member Number:</Label>
        <Input
          name="memberNumber"
          type="secondary"
          value={this.props.memberNumber}
          onChangeText={value => this.handleChangeText(value, 'memberNumber')}
        />
        <Label type="secondary">Last 4 SSN:</Label>
        <Input
          name="ssn"
          type="secondary"
          value={this.props.ssn}
          onChangeText={value => this.handleChangeText(value, 'ssn')}
        />
        <InfoText>Please enter your ZIP code so we can locate a partner finantial institution in your area.</InfoText>
      </View>
    );
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    onChangeText: (value, name) => dispatch(changeText(value, name)),
  };
}

const mapStateToProps = createStructuredSelector({
  memberNumber: makeSelectMemberNumber(),
  ssn: makeSelectSSN(),
});

export default connect(mapStateToProps, mapDispatchToProps)(FinantialForm);
