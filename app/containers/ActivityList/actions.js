import { GET_ACTIVITIES, SET_ACTIVITIES } from './constants';

export function getActivities() {
  return {
    type: GET_ACTIVITIES,
  };
}

export function setActivities(activities) {
  return {
    type: SET_ACTIVITIES,
    activities,
  };
}
