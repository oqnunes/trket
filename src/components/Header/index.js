import React from 'react';

import './styles.css';

import imageTitle from './../../assets/title.png';

function Header() {

  const dataLink = [
    {
      id: 1,
      name: 'Cerificates'
    },
    {
      id: 2,
      name: 'Testimonials'
    },
    {
      id: 3,
      name: 'Partners'
    },
    {
      id: 4,
      name: 'FAQ'
    },
  ];

  return(
    <div className="_header left_header">
      <img className="imageTitle" src={imageTitle} alt="TitleImage" />
      <div className="secondBoxSubTitle">
        {dataLink.map((item) => (<div key={item.id} className="linkFor">{item.name}</div>))}
        <div className="linkFor">
          Contact us
        </div>
      </div>
    </div>
  );
}

export default Header;