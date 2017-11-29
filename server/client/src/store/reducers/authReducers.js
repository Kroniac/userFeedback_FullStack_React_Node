import * as actionTypes from '../actions/actionTypes';

const reducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return action.payload || false;
    default:
      return state;
  }
};

export default reducer;
