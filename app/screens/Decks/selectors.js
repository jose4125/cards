import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectName = () => createSelector(
  selectHome,
  homeState => homeState.getIn(['account', 'name']),
);

const makeSelectEmail = () => createSelector(
  selectHome,
  homeState => homeState.getIn(['account', 'email']),
);

const makeSelectPassword = () => createSelector(
  selectHome,
  homeState => homeState.getIn(['account', 'password']),
);

const makeSelectConfirmPassword = () => createSelector(
  selectHome,
  homeState => homeState.getIn(['account', 'confirmPassword']),
);

const makeSelectZipCode = () => createSelector(
  selectHome,
  homeState => homeState.getIn(['account', 'zipCode']),
);

const makeSelectMemberNumber = () => createSelector(
  selectHome,
  homeState => homeState.getIn(['account', 'memberNumber']),
);

const makeSelectSSN = () => createSelector(
  selectHome,
  homeState => homeState.getIn(['account', 'ssn']),
);

export {
  selectHome,
  makeSelectName,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectConfirmPassword,
  makeSelectZipCode,
  makeSelectMemberNumber,
  makeSelectSSN,
};
