import { StackNavigator, TabNavigator } from 'react-navigation';

import Decks from '../screens/Decks';
import NewDeck from '../screens/NewDeck';
import DeckDetail from '../screens/DeckDetail';
import AddCard from '../screens/AddCard';
import Quiz from '../screens/Quiz';

const deck = StackNavigator({
  decks: {
    screen: Decks,
    navigationOptions: {
      header: () => null,
      gesturesEnabled: false,
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
  quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      tabBarVisible: false,
    },
  },
}, {
  headerMode: 'screen',
})

export default TabNavigator({
  decks: {
    screen: deck,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  newDeck: {
    screen: NewDeck,
  }
}, {
  headerMode: 'none',
});
