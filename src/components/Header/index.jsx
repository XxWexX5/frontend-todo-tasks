import React from 'react';

import PropTypes from 'prop-types';

import ContainerHeader from './styles.js';

import ImageCalendar from '../../assets/images/icon-calendar.svg';

import { returnAPI } from '../../utils/returnAPI';

const Header = ({ header }) => {
  return (
    <ContainerHeader>
      <div className="container-image">
        <img src={ImageCalendar} alt="Ícone de calendário." className="" />
      </div>

      <h2 className="title">{header.text_header}</h2>
    </ContainerHeader>
  );
};

Header.propTypes = {
  header: PropTypes.object,
};

export default Header;
