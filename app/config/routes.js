import { StackNavigator, TabNavigator } from 'react-navigation';

import Decks from '../screens/Decks';
import NewDeck from '../screens/NewDeck';
import DeckDetail from '../screens/DeckDetail';
import AddCard from '../screens/AddCard';

const deck = StackNavigator({
  decks: {
    screen: Decks,
    navigationOptions: {
      header: () => null,
    },
  },
  decksDetail: {
    screen: DeckDetail,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
  addCard: {
    screen: AddCard,
    navigationOptions: {
      tabBarVisible: false,
    },
  },
}, {
  headerMode: 'screen',
})

export default TabNavigator({
  decks: {
    screen: deck,
  },
  newDeck: {
    screen: NewDeck,
  }
}, {
  headerMode: 'none',
});
