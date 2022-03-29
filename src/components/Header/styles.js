import styled, { css } from 'styled-components';

export const ContainerHeader = styled.header`
  display: flex;
  margin-bottom: 3em;

  .container-image {
    max-width: 4.35em;
    margin-left: -0.55em;
  }

  .title {
    ${({ theme }) => {
      return css`
        font-size: ${theme.fontSize.font01};
        margin-left: 0.35em;
        color: ${theme.colors.red};
        letter-spacing: -0.015em;
      `;
    }};
  }
`;

export default ContainerHeader;
