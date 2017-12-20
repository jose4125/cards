import { StackNavigator, TabNavigator } from 'react-navigation';

import Decks from '../screens/Decks';

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
