import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { createStructuredSelector } from "reselect";

import { selectedDeck, changeSaved } from './actions';
import { makeSelectDeck } from './selectors';
import styles from './styles';

import { Button } from '../../components/Button';

export class DeckInfo extends React.PureComponent {
  componentDidMount() {
    this.props.selectedDeck(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.saved) {
      this.props.selectedDeck(this.props.id);
      this.props.changeSaved();
    }
  }

  goToAddCard(deck) {
    this.props.navigation.navigate('addCard', { deck });
  }

  render() {
    return (
      <View>
        {this.props.deck && <Text style={styles.title}>{this.props.deck.title}</Text>}
        {this.props.deck && <Text style={styles.info}>{this.props.deck.questions.length} cards</Text>}
        <Button handleClick={() => this.goToAddCard(this.props.deck)}>Add Card</Button>
        <Button>Start Quiz</Button>
      </View>

    );
  }
}

const mapStateToProps = createStructuredSelector({
  deck: makeSelectDeck(),
});

export function mapDispatchToProps(dispatch) {
  return {
    selectedDeck: id => dispatch(selectedDeck(id)),
    changeSaved: () => dispatch(changeSaved()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckInfo);
