import styled, { css } from 'styled-components';

import IconPlus from '../../assets/images/plus.svg';

export const ContainerInputTask = styled.footer`
  ${({ theme }) => css`
    position: relative;

    &:before {
      content: '';
      width: 18px;
      height: auto;
      position: absolute;
      top: 0;
      left: 1.95em;
      bottom: 0;
      margin: auto;
      background-image: url(${IconPlus});
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .input-task {
      width: 100%;
      height: 2em;
      border: 0;
      background: ${theme.colors.white};
      z-index: 1;
      color: ${theme.colors.gray};
      font-size: ${theme.fontSize.font02};
      padding: 1.35em 2.65em;
      outline: 0;
      border-radius: 0.25em;
      cursor: pointer;
      border: 1px solid rgba(172, 57, 93, 0.4);
    }
  `}
`;

export default ContainerInputTask;
