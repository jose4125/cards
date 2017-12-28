import { SELECTED_DECK, CHANGE_SAVED } from './constants';

export function selectedDeck(key) {
  return {
    type: SELECTED_DECK,
    key,
  };
}

export function changeSaved() {
  return {
    type: CHANGE_SAVED,
  };
}