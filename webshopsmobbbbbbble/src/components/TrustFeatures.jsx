import React from 'react';
import '../styles/TrustFeatures.css';

const TrustFeatures = () => {
  return (
    <div className="tf-root">
      <div className="tf-container">
        
        <div className="tf-item">
          <div className="tf-icon-box">
            <svg viewBox="0 0 24 24" className="tf-svg">
              <path d="M12 2L2 9l10 13L22 9l-10-7zm0 3.2L18.6 9 12 18.2 5.4 9 12 5.2z" />
            </svg>
          </div>
          <h3 className="tf-title">اصالت و کیفیت تضمینی</h3>
          <p className="tf-desc">ضمانت ۱۰۰٪ اورجینال بودن کلیه محصولات</p>
        </div>

        <div className="tf-divider"></div>

        <div className="tf-item">
          <div className="tf-icon-box">
            <svg viewBox="0 0 24 24" className="tf-svg">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          </div>
          <h3 className="tf-title">ارسال سریع و ایمن</h3>
          <p className="tf-desc">تحویل فوری با بسته‌بندی ویژه به سراسر کشور</p>
        </div>

        <div className="tf-divider"></div>

        <div className="tf-item">
          <div className="tf-icon-box">
            <svg viewBox="0 0 24 24" className="tf-svg">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 16l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
            </svg>
          </div>
          <h3 className="tf-title">پرداخت امن و مطمئن</h3>
          <p className="tf-desc">درگاه‌های بانکی معتبر با بالاترین ایمنی</p>
        </div>

        <div className="tf-divider"></div>

        <div className="tf-item">
          <div className="tf-icon-box">
            <svg viewBox="0 0 24 24" className="tf-svg">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
            </svg>
          </div>
          <h3 className="tf-title">پشتیبانی ۲۴/۷</h3>
          <p className="tf-desc">پاسخگویی سریع کارشناسان در تمامی ساعات</p>
        </div>

      </div>
    </div>
  );
};

export default TrustFeatures;