import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { createStructuredSelector } from "reselect";

import { fetchDecks, changeSaved } from './actions';
import { makeSelectDecks, makeSelectSaved } from './selectors';
import { DeckItem } from '../../components/DeckItem';



export class DecksList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchDecks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.saved) {
      this.props.fetchDecks();
      this.props.changeSaved();
    }
  }

  goToDetails(deck) {
    this.props.navigation.navigate('decksDetail', { deck });
  }

  renderDeckItem(item) {
    return (<DeckItem data={item} onPress={() => this.goToDetails(item)} />);
  }
  render() {
    console.log('render list')
    return (
      <FlatList
        renderItem={({ item }) => this.renderDeckItem(item)}
        data={this.props.decks}
        keyExtractor={item => item.title}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  decks: makeSelectDecks(),
  saved: makeSelectSaved(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchDecks: () => dispatch(fetchDecks()),
    changeSaved: () => dispatch(changeSaved()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
