import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchUsers = () => {
  return dispatch => {
    axios.get('/api/current_user').then(res =>
      dispatch({
        type: actionTypes.FETCH_USERS,
        payload: res
      })
    );
  };
};
