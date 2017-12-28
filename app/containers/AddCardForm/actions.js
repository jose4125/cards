import { SEND_CARD, CHANGE_SAVED } from './constants';

export function sendCard(card, deckKey) {
  return {
    type: SEND_CARD,
    card,
    deckKey
  };
}

export function changeSaved() {
  return {
    type: CHANGE_SAVED,
  };
}
