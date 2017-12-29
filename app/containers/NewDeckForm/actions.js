import { SEND_DECK, CHANGE_SAVED } from './constants';

export function sendDeck(deck) {
  return {
    type: SEND_DECK,
    deck,
  };
}

export function changeSaved() {
  return {
    type: CHANGE_SAVED,
  };
}
