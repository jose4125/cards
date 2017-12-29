import { SELECTED_QUESTION } from './constants';

export function selectedDeck(index) {
  return {
    type: SELECTED_QUESTION,
    index,
  };
}
