import React from 'react';

import landOne from './../../assets/imageLangOne.png';

import './styles.css';

function Presentation() {
  return (
    <div className="_primaryBox">
      <div>
        <h1>
          We biuld product managers
        </h1>
        <p>
          Get your next Product Management<br />job or promotion
        </p>
        <div className="contentButtonsPrimaryBox">
          <button>
            Take the best
          </button>
          <button>
            Learn more
          </button>
        </div>
      </div>
      <img src={landOne} alt="landOne" />
    </div>
  );
}

export default Presentation;