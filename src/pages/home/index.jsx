import { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';

import * as styled from './styles.js';

import Header from '../../components/Header';

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
    return <p>Carregando...</p>;
  }

  const dataPage = data.pages.data[0].attributes;

  return (
    <div className="App">
      <styled.App>
        <div className="container">
          <Header header={dataPage.header} />
        </div>
      </styled.App>
    </div>
  );
}

export default Home;
