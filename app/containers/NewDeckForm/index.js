import React from 'react';
import { KeyboardAvoidingView, Alert } from 'react-native';
import { connect } from 'react-redux';

import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import styles from './styles';
import { sendDeck } from './actions';

export class NewDeckForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      title: '',
      questions: [],
    };
  }

  handleChangeText(value) {
    this.setState({ title: value });
  }

  submit() {
    if (this.state.title) {
      this.props.sendDeck(this.state);
      this.props.navigation.navigate('decksDetail', { deck: this.state})
      this.setState({ title: '' });
    } else {
      Alert.alert(
        'Missing out Deck title',
        'You should add the deck title',
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.form} behavior="padding">
        <Label>What is the title of your new deck?</Label>
        <Input
          name="title"
          value={this.state.title}
          onChangeText={value => this.handleChangeText(value)}
          placeholder="Deck Title"
        />
        <Button handleClick={() => this.submit()}>Submit</Button>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(null, { sendDeck })(NewDeckForm);
