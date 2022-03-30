import React from 'react';

import PropTypes from 'prop-types';

import ContainerHeader from './styles.js';

import { returnAPI } from '../../utils/returnAPI';

const Header = ({ header }) => {
  return (
    <ContainerHeader>
      <div className="container-image">
        <img
          src={`${returnAPI()}${header.image.data.attributes.url}`}
          alt={header.image.data.attributes.alt}
          className=""
        />
      </div>

      <h2 className="title">{header.text_header}</h2>
    </ContainerHeader>
  );
};

Header.propTypes = {
  header: PropTypes.object,
};

export default Header;
