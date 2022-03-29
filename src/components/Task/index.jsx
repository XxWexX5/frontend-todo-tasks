import React from 'react';

import ContainerTask from './styles.js';

const Task = ({
  imageFavorite,
  imageDelete,
  is_checked,
  is_favorited,
  text,
  className,
}) => (
  <ContainerTask className={className}>
    <span className={`check ${is_checked ? 'checked' : ''}`}></span>

    <p className="text">Task</p>

    <div className="container-image container-image-favorite">
      {is_favorited ? (
        <img
          src={'http://localhost:1337' + imageFavorite.url}
          alt={'http://localhost:1337' + imageFavorite.alt}
        />
      ) : (
        <img
          src={'http://localhost:1337' + imageFavorite.url}
          alt={'http://localhost:1337' + imageFavorite.alt}
        />
      )}
    </div>

    <div className="container-image container-image-delete">
      <img
        src={'http://localhost:1337' + imageDelete.url}
        alt={'http://localhost:1337' + imageDelete.alt}
      />
    </div>

    <input value={text} />
  </ContainerTask>
);

export default Task;
