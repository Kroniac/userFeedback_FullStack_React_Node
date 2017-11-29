import * as actionTypes from './actionTypes';
import axios from 'axios';

const fetchUsers = () => {
  axios.get('/api/current_user');
};
