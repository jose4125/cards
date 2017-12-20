import { fromJS } from 'immutable';


const initialState = fromJS({
  loading: false,
  currentUser: false,
  isLogin: false,
  errorLogin: false,
  token: 0,
  userId: 0,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default globalReducer;
