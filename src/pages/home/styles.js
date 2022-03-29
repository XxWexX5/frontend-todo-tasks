import styled, { css } from 'styled-components';

export const App = styled.div`
  ${({ theme, color }) => css`
    height: 100%;

    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .wrapper-tasks {
      height: 78%;

      .task + .task {
        margin-top: 0.85em;
      }
    }
  `};
`;
