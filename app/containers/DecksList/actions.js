import { FETCH_DECKS, STORE_MOCK } from './constants';

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
