import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { createStructuredSelector } from 'reselect';

import { changeText } from '../../screens/Decks/actions';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { InfoText } from '../../components/InfoText';
import {
  makeSelectName,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectConfirmPassword,
} from '../../screens/Decks/selectors';

import styles from './styles';

export class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(value, name) {
    this.props.onChangeText(value, name);
  }

  render() {
    return (
      <View style={styles.form}>
        <Label type="secondary">Name:</Label>
        <Input
          name="name"
          type="secondary"
          value={this.props.name}
          onChangeText={value => this.handleChangeText(value, 'name')}
        />
        <Label type="secondary">Email:</Label>
        <Input
          name="email"
          type="secondary"
          value={this.props.email}
          onChangeText={value => this.handleChangeText(value, 'email')}
        />
        <InfoText>
          Your password must include at least one symbol and be at least 8 characters long
        </InfoText>
        <Label type="secondary">Password:</Label>
        <Input
          name="password"
          type="secondary"
          value={this.props.password}
          secureTextEntry
          onChangeText={value => this.handleChangeText(value, 'password')}
        />
        <Label type="secondary">Confirm Password:</Label>
        <Input
          name="confirmPassword"
          type="secondary"
          value={this.props.confirmPassword}
          secureTextEntry
          onChangeText={value => this.handleChangeText(value, 'confirmPassword')}
        />
      </View>
    );
  }
}

export function mapDispatchToProps (dispatch) {
  return {
    onChangeText: (value, name) => dispatch(changeText(value, name))
  };
}

const mapStateToProps = createStructuredSelector({
  name: makeSelectName(),
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  confirmPassword: makeSelectConfirmPassword(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
