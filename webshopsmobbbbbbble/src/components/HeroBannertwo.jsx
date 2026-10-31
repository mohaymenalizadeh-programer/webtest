import React from 'react';
import '../styles/HeroBannertwo.css';

const HeroBannertwo = () => {
  return (
    <div className="hbw-root">
      <div className="hbw-box">
        <div className="hbw-overlay"></div>
        <div className="hbw-inner">
          <h1 className="hbw-heading">
            خانه‌ای متفاوت <br />
            با مبلمان بلو
          </h1>
          <p className="hbw-text">
            انتخابی هوشمندانه برای زندگی بهتر
          </p>
          <button className="hbw-action">
            مشاهده بیشتر <span className="hbw-icon">←</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBannertwo;