import React from 'react';

import ContainerTask from './styles.js';

const Task = (props) => (
  <ContainerTask>
    <span className="check"></span>

    <p className="text">Task</p>

    <div className="container-image container-image-favorite">
      <img
        src={'http://localhost:1337' + props.imageFavorite.url}
        alt={'http://localhost:1337' + props.imageFavorite.alt}
      />
    </div>

    <div className="container-image container-image-delete">
      <img
        src={'http://localhost:1337' + props.imageDelete.url}
        alt={'http://localhost:1337' + props.imageDelete.alt}
      />
    </div>

    <input />
  </ContainerTask>
);

export default Task;
