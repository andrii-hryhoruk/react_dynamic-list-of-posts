export const BASE_URL = 'https://mate.academy/students-api';

export const requestOnAPI = async (url: string) => {
  const response = await fetch(`${BASE_URL}/${url}`);

  if (!response.ok) {
    throw new Error('Failed to load posts');
  }

  return response.json();
};
