import { gql, useMutation } from '@apollo/client';
import React, { useState, useEffect } from 'react';

import ContainerTask from './styles.js';

import { GET_PAGE } from '../../pages/home';

const DELETE_TASK = gql`
  mutation DELETE_TASK($id: ID!) {
    deleteTodoTask(id: $id) {
      data {
        id
      }
    }
  }
`;

const UPDATE_TASK = gql`
  mutation UPDATE_TASK(
    $id: ID!
    $changeChecked: Boolean
    $changeFavorited: Boolean
    $valueInputTask: String
  ) {
    updateTodoTask(
      id: $id
      data: {
        task: {
          is_checked: $changeChecked
          is_favorited: $changeFavorited
          text: $valueInputTask
        }
      }
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

const Task = ({
  imageFavorite,
  imageNoFavorite,
  imageDelete,
  isChecked,
  isFavorited,
  text,
  className,
  id,
}) => {
  const [deleteTask, { dataDelete }] = useMutation(DELETE_TASK);
  const [updateTask, { dataUpdate }] = useMutation(UPDATE_TASK);
  const [changeChecked, setChangeChecked] = useState(isChecked);
  const [changeFavorited, setChangeFavorited] = useState(isFavorited);
  const [valueInputTask, setValueInputTask] = useState(text);

  useEffect(() => {
    handleUpdateTask();
  }, [changeChecked, changeFavorited, valueInputTask]);

  async function handleUpdateTask() {
    await updateTask({
      variables: {
        id,
        changeChecked,
        changeFavorited,
        valueInputTask,
      },
      refetchQueries: [GET_PAGE],
    });
  }

  async function handleDeleteTask() {
    await deleteTask({
      variables: {
        id,
      },
      refetchQueries: [GET_PAGE],
    });
  }

  return (
    <ContainerTask className={className}>
      <span
        className={`check ${changeChecked ? 'checked' : ''}`}
        onClick={() =>
          changeChecked ? setChangeChecked(false) : setChangeChecked(true)
        }
      ></span>

      <div
        className="container-image container-image-favorite"
        onClick={() =>
          changeFavorited ? setChangeFavorited(false) : setChangeFavorited(true)
        }
      >
        {changeFavorited ? (
          <img
            src={'http://localhost:1337' + imageFavorite.url}
            alt={'http://localhost:1337' + imageFavorite.alt}
          />
        ) : (
          <img
            src={'http://localhost:1337' + imageNoFavorite.url}
            alt={'http://localhost:1337' + imageNoFavorite.alt}
          />
        )}
      </div>

      <div
        className="container-image container-image-delete"
        onClick={handleDeleteTask}
      >
        <img
          src={'http://localhost:1337' + imageDelete.url}
          alt={'http://localhost:1337' + imageDelete.alt}
        />
      </div>

      <input
        value={valueInputTask}
        onChange={(e) => setValueInputTask(e.target.value)}
        onBlur={() => handleUpdateTask()}
      />
    </ContainerTask>
  );
};

export default Task;
