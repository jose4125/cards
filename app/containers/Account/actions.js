import { GET_CONSUMER, SET_CONSUMER } from './constants';

export function getConsumer() {
  return {
    type: GET_CONSUMER,
  };
}

export function setConsumer(consumer) {
  return {
    type: SET_CONSUMER,
    consumer,
  };
}
