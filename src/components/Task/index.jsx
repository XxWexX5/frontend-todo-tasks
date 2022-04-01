import { gql, useMutation } from '@apollo/client';
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import ContainerTask from './styles.js';

import { returnAPI } from '../../utils/returnAPI';

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
  isChecked,
  isFavorited,
  text,
  className,
  imageFavorite,
  imageNoFavorite,
  imageDelete,
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
          <img src={`${imageFavorite.url}`} alt={`${imageFavorite.alt}`} />
        ) : (
          <img src={`${imageNoFavorite.url}`} alt={`${imageNoFavorite.alt}`} />
        )}
      </div>

      <div
        className="container-image container-image-delete"
        onClick={handleDeleteTask}
      >
        <img src={`${imageDelete.url}`} alt={`${imageDelete.alt}`} />
      </div>

      <input
        value={valueInputTask}
        onChange={(e) => setValueInputTask(e.target.value)}
        onBlur={() => handleUpdateTask()}
      />
    </ContainerTask>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  isChecked: PropTypes.bool,
  isFavorited: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  imageFavorite: PropTypes.object,
  imageNoFavorite: PropTypes.object,
  imageDelete: PropTypes.object,
};

export default Task;
