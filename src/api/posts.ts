import { requestOnAPI } from './api';

export const loadPosts = () => {
  return requestOnAPI('/posts');
};

export const getUserPosts = (userId: number) => {
  return requestOnAPI(`/posts?userId=${userId}`);
};
