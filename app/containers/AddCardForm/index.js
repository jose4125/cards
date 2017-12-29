import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
//import { saveDeckTitle } from '../../utils/api';

import styles from './styles';
//import { createStructuredSelector } from "reselect"
//import { makeSelectDecks } from '../DecksList/selectors'
import { sendCard } from './actions';

export class NewDeckForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.submit = this.submit.bind(this);
    console.log('props =====', this.props)
    this.state = {
      question: '',
      answer: '',
    };
  }

  handleChangeText(value, key) {
    this.setState({ [key]: value })
  }

  submit() {
    console.log(this.state);
    console.log(this.props.navigation.state.params.deck.title);
    const deckKey = this.props.navigation.state.params.deck.title;
    this.props.sendCard(this.state, deckKey);
    this.props.navigation.navigate('decksDetail', { deck: this.props.navigation.state.params.deck})
    this.setState({ question: '', answer: '' })
  }

  render() {
    return (
      <View style={styles.form}>
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
      </View>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    sendCard: (card, deckKey) => dispatch(sendCard(card, deckKey)),
  };
}

export default connect(null, mapDispatchToProps)(NewDeckForm);
