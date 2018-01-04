import React from 'react';
import { Alert, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux';

import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import styles from './styles';
import { sendCard } from './actions';

export class NewDeckForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      question: '',
      answer: '',
    };
  }

  handleChangeText(value, key) {
    this.setState({ [key]: value })
  }

  submit() {
    if (this.state.question && this.state.answer) {
      const deckKey = this.props.navigation.state.params.deck.title;
      this.props.sendCard(this.state, deckKey);
      this.props.navigation.goBack()
      this.setState({ question: '', answer: '' })
    } else {
      Alert.alert(
        'Missing out the question and the answer',
        'You should add the question and the answer',
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
        <Label>Question:</Label>
        <Input
          name="question"
          value={this.state.question}
          onChangeText={value => this.handleChangeText(value, 'question')}
        />
        <Label>Answer:</Label>
        <Input
          name="answer"
          value={this.state.answer}
          onChangeText={value => this.handleChangeText(value, 'answer')}
        />
        <Button handleClick={() => this.submit()}>Submit</Button>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(null, { sendCard })(NewDeckForm);
