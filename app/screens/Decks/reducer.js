import { fromJS } from 'immutable';

const initialState = fromJS({
  account: fromJS({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    zipCode: '',
    fi: '',
    memberNumber: '',
    ssn: '',
  }),
});

function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case 'TEXT_CHANGE':
      return state
        .setIn(['account', action.name], action.value);
    default:
      return state;
  }
}

export default HomeReducer;
