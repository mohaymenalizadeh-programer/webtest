import React from 'react';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner-wrapper">
      <div className="hero-banner-card">
        {/* لایه افکت مه/گرادینت روشن سمت راست برای خوانایی متن */}
        <div className="hero-light-fog"></div>

        {/* محتوای متنی و دکمه سمت راست */}
        <div className="hero-banner-content">
          <h1 className="hero-title">
            خانه‌ای متفاوت <br />
            با مبلمان بلو
          </h1>
          <p className="hero-subtitle">
            انتخابی هوشمندانه برای زندگی بهتر
          </p>
          <button className="hero-btn">
            مشاهده بیشتر <span className="btn-arrow">←</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;