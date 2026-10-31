import React, { useState, useRef } from 'react';
import '../styles/Shopehomepage.css';

const productsData = [
  { id: 1, title: 'صندلی ارگونومیک مدرن', desc: 'طراحی بی‌نظیر با پشتی قابل تنظیم و پارچه ضد تعریق برای راحتی طولانی مدت.', price: '۴,۲۰۰,۰۰۰', rating: 5, image: './images/JHJJa.webp' },
  { id: 2, title: 'میز عسلی چوبی', desc: 'ساخته شده از چوب راش طبیعی با فینیش مات و پایه‌های بسیار مقاوم.', price: '۱,۸۵۰,۰۰۰', rating: 4, image: './images/KU6jQ.webp' },
  { id: 4, title: 'مبل راحتی تک‌نفره', desc: 'پوشش مخمل نانو ضد لک با فوم سرد تزریقی برای عدم تغییر شکل در طول زمان.', price: '۶,۵۰۰,۰۰۰', rating: 5, image: './images/mtjDs.webp' },
  { id: 5, title: 'میز ناهارخوری گرد', desc: 'مناسب فضاهای مدرن و کوچک با صفحه ضد خش و پایه‌های چوب روس.', price: '۱۲,۴۰۰,۰۰۰', rating: 4, image: './images/QLt1Q.webp' },
  { id: 6, title: 'آباژور ایستاده مدرن', desc: 'نورپردازی ملایم با پایه فلزی کوره‌ای و شید پارچه‌ای قابل شستشو.', price: '۲,۱۰۰,۰۰۰', rating: 5, image: './images/QLt1Q.webp' },
  { id: 7, title: 'پوف استوانه‌ای مخمل', desc: 'کاربردی به عنوان صندلی میز آرایش یا زیرپایی با تراکم بالای نشیمن.', price: '۹۸۰,۰۰۰', rating: 4, image: './images/yQMak.webp' },
  { id: 8, title: 'شلف دیواری مدرن', desc: 'طراحی چندطبقه هندسی جهت چیدمان دکوری‌ها و کتاب‌های محبوب شما.', price: '۱,۴۵۰,۰۰۰', rating: 5, image: './images/mtjDs.webp' },

];

const Shopehomepage = () => {
  const [favorites, setFavorites] = useState({});
  const scrollRef = useRef(null);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="shop-wrapper">
      <div className="shop-header">
        <div className="shop-title-container">
          <h2>پیشنهادهای ویژه و پرفروش</h2>
          <p>محصولات منتخب با بالاترین کیفیت و رضایت خریداران</p>
        </div>
        <div className="scroll-arrows">
          <button className="arrow-btn" onClick={() => scroll('right')}>&#x276F;</button>
          <button className="arrow-btn" onClick={() => scroll('left')}>&#x276E;</button>
        </div>
      </div>

      <div className="shop-container" ref={scrollRef}>
        {productsData.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="card-image-box">
              <img src={item.image} alt={item.title} className="product-img" />
              <button 
                className={`like-btn ${favorites[item.id] ? 'liked' : ''}`} 
                onClick={(e) => toggleFavorite(item.id, e)}
              >
                <svg viewBox="0 0 24 24" className="heart-icon">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>

            <div className="card-body">
              <div className="rating-box">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < item.rating ? 'filled' : ''}`}>★</span>
                ))}
              </div>

              <h3 className="product-title">{item.title}</h3>
              <p className="product-desc">{item.desc}</p>

              <div className="card-footer">
                <div className="price-box">
                  <span className="price-num">{item.price}</span>
                  <span className="price-unit">تومان</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopehomepage;