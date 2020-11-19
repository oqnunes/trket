import React from 'react';

import './styles.css';

import imageTitle from './../../assets/title.png';

function Header() {
  return(
    <div className="_header left_header">
      <img className="imageTitle" src={imageTitle} alt="TitleImage" />
      <div className="secondBoxSubTitle">
        <div className="linkFor">
          Certificates
        </div>
        <div className="linkFor">
          Testimonials
        </div>
        <div className="linkFor">
          Partners
        </div>
        <div className="linkFor">
          FAQ
        </div>
        <div className="linkFor">
          Contact us
        </div>
      </div>
    </div>
  );
}

export default Header;