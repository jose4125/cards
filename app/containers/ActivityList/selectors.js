import { createSelector } from 'reselect';

const selectActivity = (state) => state.get('activity');

const makeSelectActivities = () => createSelector(
  selectActivity,
  activityState => activityState.get('activities'));


export {
  selectActivity,
  makeSelectActivities,
};
