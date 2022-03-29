import styled, { css } from 'styled-components';

export const App = styled.div`
  ${({ theme, color }) => css`
    height: 100%;

    .container {
      height: 100%;
    }

    .wrapper-tasks {
      height: 75vh;

      .task + .task {
        margin-top: 0.85em;
      }
    }
  `};
`;
