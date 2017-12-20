import { fromJS, List } from 'immutable';
import { SET_CONSUMER } from './constants';

const initialState = fromJS({
  id: null,
  name: '',
  homePhone: null,
  mobilePhone: null,
  email: '',
  localSpendingPct: 0,
  pointBalance: 0,
  termsAccepted: '',
  locations: List([]),
  financialAccounts: List([]),
});

function consummerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONSUMER:
      return state
        .set('id', action.consumer.id)
        .set('name', action.consumer.name)
        .set('homePhone', action.consumer.homePhone)
        .set('mobilePhone', action.consumer.mobilePhone)
        .set('email', action.consumer.email)
        .set('localSpendingPct', action.consumer.localSpendingPct)
        .set('pointBalance', action.consumer.pointBalance)
        .set('termsAccepted', action.consumer.termsAccepted)
        .set('locations', action.consumer.locations)
        .set('financialAccounts', action.consumer.financialAccounts)
    default:
      return state;
  }
}

export default consummerReducer;
