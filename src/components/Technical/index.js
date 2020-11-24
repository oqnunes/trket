import React from 'react';

import technicalData from './data';

import './styles.css';

function Technical() {

  const TechnicalItem = ({title, img, msg}) => {
    console.log(img);
    return(
      <div className="boxItemLi">
        <div className="contentIconImage">
          <img src={img.default} alt={title} />
        </div>
        <p>
          {title}
        </p>
        <span>
          {msg}
        </span>
      </div>
    )
  }

  return (
    <div className="contentBoxes">
      {technicalData.map((item) => {
        return(
          <TechnicalItem
            key={item.title}
            img={item.img}
            title={item.title}
            msg={item.msg} />
        );
      })}
    </div>
  );
}

export default Technical;