import { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

import * as styled from './styles.js';

import Header from '../../components/Header';
import Task from '../../components/Task';
import InputTask from '../../components/InputTask';

import ImageLoading from '../../assets/images/loading.gif';

export const GET_PAGE = gql`
  query GET_PAGE {
    pages {
      data {
        attributes {
          title_page
          slug_page
          header {
            id_header
            text_header
            image: image_header {
              ...IMAGE
            }
          }
          image_task_no_favorite {
            ...IMAGE
          }
          image_task_favorite {
            ...IMAGE
          }
          image_task_delete {
            ...IMAGE
          }
          input_task {
            placeholder: placeholder_input
          }
        }
      }
    }
    todoTasks {
      data {
        id
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

  fragment IMAGE on UploadFileEntityResponse {
    data {
      attributes {
        url
        alt: alternativeText
        caption
      }
    }
  }
`;

function Home() {
  const { data, loading } = useQuery(GET_PAGE);

  if (loading) {
    return (
      <div className="container-loading">
        <img src={ImageLoading} />
      </div>
    );
  }

  const dataPage = data.pages.data[0].attributes;
  const dataTasks = data.todoTasks.data;

  return (
    <div className="App">
      <styled.App>
        <div className="container">
          <Header header={dataPage.header} />

          <main className="wrapper-tasks">
            {dataTasks.map(({ id, attributes: { task } }) => (
              <Task
                className="task"
                key={id}
                id={id}
                isChecked={task.is_checked}
                isFavorited={task.is_favorited}
                text={task.text}
                imageFavorite={dataPage.image_task_favorite.data.attributes}
                imageNoFavorite={
                  dataPage.image_task_no_favorite.data.attributes
                }
                imageDelete={dataPage.image_task_delete.data.attributes}
              />
            ))}
          </main>

          <InputTask inputTask={dataPage.input_task} />
        </div>
      </styled.App>
    </div>
  );
}

export default Home;
