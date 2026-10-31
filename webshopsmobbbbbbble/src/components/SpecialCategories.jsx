import React from 'react';
import '../styles/SpecialCategories.css';

const specialCategoriesData = [
    { id: 1, title: 'کمد و کنسول', image: './images/JHJJa.webp' },
    { id: 2, title: 'صندلی', image: './images/KU6jQ.webp' },
    { id: 3, title: 'میز جلو مبلی', image: './images/mtjDs.webp' },
    { id: 4, title: 'میز و صندلی', image: './images/QLt1Q.webp' },
    { id: 5, title: 'مبلمان کلاسیک', image: './images/QLt1Q.webp' },
    { id: 6, title: 'مبلمان راحتی', image: './images/yQMak.webp' },
    { id: 7, title: 'دکوراسیون و اکسسوری', image: './images/mtjDs.webp' },
];

const SpecialCategories = () => {
  return (
    <div className="special-cat-wrapper">
      <div className="special-cat-header">
        <h2>دسته بندی‌های ویژه</h2>
      </div>
      <div className="special-cat-grid">
        {specialCategoriesData.map((item) => (
          <div className="special-cat-card" key={item.id}>
            <div className="special-cat-img-box">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="special-cat-info">
              <span className="special-cat-title">{item.title}</span>
              <div className="pulse-dot-container">
                <div className="pulse-ring"></div>
                <div className="pulse-dot"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialCategories;