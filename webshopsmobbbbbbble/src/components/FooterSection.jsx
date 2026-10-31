import React from 'react';
import '../styles/FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="fs-root">
      <div className="fs-newsletter-banner">
        <div className="fs-banner-overlay"></div>
        <div className="fs-banner-content">
          <p className="fs-banner-title">با عضویت در خبرنامه، از جدیدترین تخفیف‌ها باخبر شوید!</p>
          <div className="fs-banner-form">
            <button className="fs-banner-btn">عضویت</button>
            <input 
              type="email" 
              placeholder="ایمیل خود را وارد کنید" 
              className="fs-banner-input" 
            />
          </div>
        </div>
      </div>

      <div className="fs-main-footer">
        <div className="fs-footer-container">
          
          <div className="fs-col-links">
            <h4 className="fs-col-title">دسترسی سریع</h4>
            <ul className="fs-links-list">
              <li><a href="#home">خانه</a></li>
              <li><a href="#products">محصولات</a></li>
              <li><a href="#about">درباره ما</a></li>
              <li><a href="#contact">تماس با ما</a></li>
            </ul>
          </div>

          <div className="fs-col-links">
            <h4 className="fs-col-title">خدمات مشتریان</h4>
            <ul className="fs-links-list">
              <li><a href="#support">پشتیبانی</a></li>
              <li><a href="#faq">سؤالات متداول</a></li>
              <li><a href="#terms">شرایط و قوانین</a></li>
              <li><a href="#privacy">حریم خصوصی</a></li>
            </ul>
          </div>

          <div className="fs-col-newsletter">
            <h4 className="fs-col-title">عضویت در خبرنامه</h4>
            <p className="fs-col-desc">برای اطلاع از جدیدترین محصولات ایمیل خود را وارد کنید</p>
            <div className="fs-footer-form">
              <button className="fs-footer-submit-btn">→</button>
              <input 
                type="email" 
                placeholder="ایمیل خود را وارد کنید" 
                className="fs-footer-input" 
              />
            </div>
          </div>

          <div className="fs-col-brand">
            <div className="fs-brand-row">
              <span className="fs-brand-name">بلو</span>
              <div className="fs-brand-logo-icon">
                <svg viewBox="0 0 24 24" className="fs-svg-leaf">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>
            <div className="fs-social-icons">
              <a href="#instagram" className="fs-social-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#telegram" className="fs-social-icon">
                <svg viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.535-.196 1.006.128.832.956z"/></svg>
              </a>
              <a href="#whatsapp" className="fs-social-icon">
                <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
              <a href="#bag" className="fs-social-icon">
                <svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-2.21-1.79-4-4-4s-4 1.79-4 4v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4c0-1.1.9-2 2-2s2 .9 2 2v2h-4V4zm10 16H4V8h16v12z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="fs-footer-bottom">
          <div className="fs-copyright">
            <span>© 2025 تمامی حقوق و مادی و معنوی به بلو است.</span>
          </div>
          <div className="fs-bottom-icon-box">
            <svg viewBox="0 0 24 24" className="fs-bottom-arrow">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;