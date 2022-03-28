import styled, { css } from 'styled-components';

export const App = styled.div`
  ${({ theme, color }) => css`
    color: ${theme.colors.green};
  `};
`;
