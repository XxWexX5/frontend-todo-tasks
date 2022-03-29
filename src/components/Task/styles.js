import styled, { css } from 'styled-components';

import IconCheck from '../../assets/images/icon-check.svg';

export const ContainerTask = styled.div`
  ${({ theme }) => css`
    border-radius: 0.45em;
    position: relative;
    height: 5.15em;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: 0;
      background: ${theme.colors.white};
      z-index: 1;
      color: ${theme.colors.gray};
      font-size: ${theme.fontSize.font02};
      padding: 0 3em;
      outline: 0;
      border-radius: 0.45em;
      cursor: pointer;
    }

    .container-image-favorite {
      z-index: 2;
      max-width: 2.45em;
      position: absolute;
      right: 1.15em;
      top: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;

      &:hover {
        opacity: 0.75;
      }
    }

    .container-image-delete {
      z-index: 2;
      max-width: 1.8em;
      position: absolute;
      right: -3.35em;
      top: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;

      &:hover {
        opacity: 0.75;
      }
    }

    .check {
      display: block;
      width: 2.15em;
      height: 2.15em;
      border-radius: 100%;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.gray};
      position: relative;
      z-index: 2;
      margin-left: 2em;
      cursor: pointer;
      transition: 0.35s opacity ease-in-out;

      &.checked {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &:after {
          content: '';
          background-image: url(${IconCheck});
          background-size: contain;
          background-position: center center;
          background-repeat: no-repeat;
          width: 1.35em;
          height: 1em;
          display: block;
          margin-left: -0.1em;
        }
      }

      &:hover {
        opacity: 0.75;
      }
    }
  `};
`;

export default ContainerTask;
