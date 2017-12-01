import * as actionTypes from './actionTypes';
import axios from 'axios';

//to fetch user's login data
export const fetchUsers = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  console.log(res.data);
  dispatch({ type: actionTypes.FETCH_USERS, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: actionTypes.FETCH_USERS, payload: res.data });
};
