import { requestOnAPI } from './api';

export const loadUsers = () => {
  return requestOnAPI('/users');
};
