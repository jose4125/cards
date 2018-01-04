import { AsyncStorage } from 'react-native';

export function saveDeckTitle(deck) {
  return AsyncStorage.mergeItem('decks', JSON.stringify({
    [deck.title]: deck,
  }),() => {
    AsyncStorage.getItem('decks', (err, result) => {
      console.log(result);
    })
  });
}

export function getDecks() {
  return AsyncStorage.getItem('decks');
}

function getDeck(key) {
  return AsyncStorage.getItem('decks')
    .then(response => {
      return JSON.parse(response)[key];
  });
}

export async function addCardToDeck(card, key) {
  const deck = await getDeck(key);
  deck.questions.push(card);
  return AsyncStorage.mergeItem('decks', JSON.stringify({
    [key]: deck,
  }),() => {
    AsyncStorage.getItem('decks', (err, result) => {
      console.log(result);
    })
  });
}

export function removeItem() {
  return AsyncStorage.removeItem('decks')
}
