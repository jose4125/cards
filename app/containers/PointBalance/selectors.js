import { createSelector } from 'reselect';

const selectConsumer = state => state.get('consumer');

const makeSelectPoints = () => createSelector(
  selectConsumer,
  consumerState => consumerState.get('pointBalance'),
);

export {
  selectConsumer,
  makeSelectPoints,
};
