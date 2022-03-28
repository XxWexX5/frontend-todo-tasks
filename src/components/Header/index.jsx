import React from 'react';

import ContainerHeader from './styles.js';

const Header = (props) => {
  console.log(props.header);

  return (
    <ContainerHeader>
      <div className="container-image">
        <img
          src={'http://localhost:1337' + props.header.image.data.attributes.url}
          alt=""
          className=""
        />
      </div>

      <h2 className="title">{props.header.text_header}</h2>
    </ContainerHeader>
  );
};

export default Header;
