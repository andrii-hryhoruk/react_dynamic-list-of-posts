import React, { useState, useEffect } from 'react';
import './PostsList.scss';

import { loadPosts, getUserPosts } from '../../api/posts';

interface Props {
  selectedUserId: number;
}

export const PostsList: React.FC<Props> = (props) => {
  const { selectedUserId } = props;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      if (!selectedUserId) {
        const postsFromAPI = await loadPosts();

        setPosts(postsFromAPI);

        return;
      }

      const userPostsFromAPI = await getUserPosts(selectedUserId);

      setPosts(userPostsFromAPI);
    })();
  }, [selectedUserId]);

  return (
    <div className="PostsList">
      <h2>Posts:</h2>

      <ul className="PostsList__list">
        {posts.length && (
          posts.map((post) => (
            <li
              key={post.id}
              className="PostsList__item"
            >
              <div>
                <b>{`[User #${post.userId}]: `}</b>
                {post.title}
              </div>
              <button
                type="button"
                className="PostsList__button button"
              >
                Close
              </button>
            </li>
          ))
        )}
        <li className="PostsList__item">
          <div>
            <b>[User #2]: </b>
            et ea vero quia laudantium autem
          </div>

          <button
            type="button"
            className="PostsList__button button"
          >
            Open
          </button>
        </li>
      </ul>
    </div>
  );
};
