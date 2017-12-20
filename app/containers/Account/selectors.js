import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectToken = () => createSelector(
  selectGlobal,
  globalState => globalState.get('token'));

const makeSelectUserId = () => createSelector(
  selectGlobal,
  globalState => globalState.get('userId'));

export {
  selectGlobal,
  makeSelectToken,
  makeSelectUserId,
};
