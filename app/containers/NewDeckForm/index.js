import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';

import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
//import { saveDeckTitle } from '../../utils/api';

import styles from './styles';
//import { createStructuredSelector } from "reselect"
//import { makeSelectDecks } from '../DecksList/selectors'
import { sendDeck } from './actions';

export class NewDeckForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.submit = this.submit.bind(this);
    console.log('props =====', this.props)
    this.state = {
      title: '',
      questions: [],
    };
  }

  handleChangeText(value) {
    this.setState({ title: value });
  }

  submit() {
    console.log(this.state);
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
      <View style={styles.form}>
        <Label>What is the title of your new deck?</Label>
        <Input
          name="title"
          value={this.state.title}
          onChangeText={value => this.handleChangeText(value)}
          placeholder="Deck Title"
        />
        <Button handleClick={() => this.submit()}>Submit</Button>
      </View>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    sendDeck: deck => dispatch(sendDeck(deck)),
  };
}

export default connect(null, mapDispatchToProps)(NewDeckForm);
