import { StackNavigator, TabNavigator } from 'react-navigation';

import Decks from '../screens/Decks';
import NewDeck from '../screens/NewDeck';

export default TabNavigator({
  decks: {
    screen: Decks,
    // navigationOptions: {
    //   header: () => null,
    // },
  },
  newDeck: {
    screen: NewDeck,
  }
}, {
  headerMode: 'none',
});
