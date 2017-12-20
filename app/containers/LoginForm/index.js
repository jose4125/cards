import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form/immutable';

import { Label } from '../../components/Label';
import { Input } from '../../components/Input';

import styles from './styles';

export class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderInput = this.renderInput.bind(this);
  }

  renderInput({ type, secureTextEntry = false,
    input: { onChange, ...restInput } }) {
    return (
      <Input
        type={type}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
        {...restInput}
      />
    );
  }

  render() {
    return (
      <View style={styles.form}>
        <Label type="secondary">Email:</Label>
        <Field
          name="email"
          component={this.renderInput}
          type="secondary"
        />
        <Label type="secondary">Password:</Label>
        <Field
          name="password"
          component={this.renderInput}
          secureTextEntry
          type="secondary"
        />
      </View>
    );
  }
}

export default reduxForm({
  form: 'LogIn',
})(LoginForm);
