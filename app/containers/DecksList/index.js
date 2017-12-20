import React from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { createStructuredSelector } from "reselect";

import { fetchDecks } from './actions';
import { makeSelectDecks } from './selectors';
import { DeckItem } from '../../components/DeckItem';



export class DecksList extends React.PureComponent {
  componentDidMount() {
    this.props.fetchDecks();
  }

  renderDeckItem(item) {
    console.log('item', item)
    return (<DeckItem data={item} />);
  }
  render() {
    console.log('props decks', this.props.decks)
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
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchDecks: () => dispatch(fetchDecks()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
