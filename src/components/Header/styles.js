import styled, { css } from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  margin-bottom: 3.5em;

  .container-image {
    max-width: 4.35em;
    margin-left: -0.55em;
  }

  .title {
    ${({ theme }) => css`
      font-size: ${theme.fontSize.font01};
      margin-left: 0.35em;
      color: ${theme.colors.red};
    `};
  }
`;

export default ContainerHeader;
