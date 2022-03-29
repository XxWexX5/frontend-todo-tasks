import React from 'react';

import ContainerInputTask from './styles';

const InputTask = ({ inputTask }) => {
  return (
    <ContainerInputTask>
      <input className="input-task" placeholder={inputTask.placeholder} />
    </ContainerInputTask>
  );
};

export default InputTask;
