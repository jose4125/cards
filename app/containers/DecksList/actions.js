import { FETCH_DECKS, STORE_MOCK,STORE_DATA } from './constants';
import { CHANGE_SAVED } from '../NewDeckForm/constants'

export function fetchDecks() {
  return {
    type: FETCH_DECKS,
  };
}

export function storeMock(mock) {
  return {
    type: STORE_MOCK,
    mock,
  };
}

export function storeData(decks) {
  return {
    type: STORE_DATA,
    decks,
  };
}

export function changeSaved() {
  return {
    type: CHANGE_SAVED,
  };
}
