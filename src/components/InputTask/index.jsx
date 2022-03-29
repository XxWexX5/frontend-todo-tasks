import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';

import ContainerInputTask from './styles';

import { GET_PAGE } from '../../pages/home';

const CREATE_TASK = gql`
  mutation CREATE_TASK($task: String!) {
    createTodoTask(
      data: { task: { is_checked: false, is_favorited: false, text: $task } }
    ) {
      data {
        attributes {
          task {
            is_checked
            is_favorited
            text
          }
        }
      }
    }
  }
`;

const InputTask = ({ inputTask }) => {
  const [task, setTask] = useState('');

  const [createTask, { data, loading, error }] = useMutation(CREATE_TASK);

  async function handleCreateTask(e) {
    e.preventDefault();

    setTask('');

    if (!task) {
      return;
    }

    await createTask({
      variables: {
        task,
      },
      refetchQueries: [GET_PAGE],
    });
  }

  return (
    <ContainerInputTask>
      <input
        className="input-task"
        placeholder={inputTask.placeholder}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onBlur={handleCreateTask}
        onKeyPress={(e) => (e.key === 'Enter' ? handleCreateTask(e) : '')}
      />
    </ContainerInputTask>
  );
};

export default InputTask;
