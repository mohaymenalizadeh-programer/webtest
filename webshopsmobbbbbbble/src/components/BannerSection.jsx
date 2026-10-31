
import React from 'react';
import '../styles/BannerSection.css'; 

const BannerSection = () => {
  return (
    <div className="banner-section-outer">
      <div className="banner-section-container">
        



        <div className="banner-card banner-left-img-box">
          <img 
            src="./images/Yvl93.webp" 
            alt="میز ناهارخوری مدرن" 
            className="banner-left-img"
          />
        </div>
        <div className="banner-card banner-right-bg">
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <h2 className="banner-title">زیبایی در جزئیات است...</h2>
            <p className="banner-description">
              با طراحی منحصر به فرد، فضای زندگی خود را به یک اثر هنری تبدیل کنید.
            </p>
            <button className="banner-btn">
              درباره ما <span className="btn-arrow">←</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;