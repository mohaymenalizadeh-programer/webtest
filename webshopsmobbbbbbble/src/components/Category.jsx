
import React from 'react';
import '../styles/Category.css'; 

const categories = [
  { id: 1, title: 'کمد و کنسول', image: './images/JHJJa.webp' },
  { id: 2, title: 'صندلی', image: './images/KU6jQ.webp' },
  { id: 3, title: 'میز جلو مبلی', image: './images/mtjDs.webp' },
  { id: 4, title: 'میز و صندلی', image: './images/QLt1Q.webp' },
  { id: 5, title: 'مبلمان کلاسیک', image: './images/QLt1Q.webp' },
  { id: 6, title: 'مبلمان راحتی', image: './images/yQMak.webp' },
  { id: 7, title: 'دکوراسیون و اکسسوری', image: './images/mtjDs.webp' }, 
];

const Category = () => {
  return (
    <div className="category-section-wrapper">

      <div className="category-capsule-outer">
        <div className="category-scroll-container">
          {categories.map((cat, index) => (
            <div key={cat.id} className="category-card-wrapper">
              <div className="category-card">

                <div className="category-img-box">
                  <img src={cat.image} alt={cat.title} />
                </div>

                <div className="category-info">
                  <span className="category-title">{cat.title}</span>
                  <div className="category-dot"></div>
                </div>
              </div>

              {index < categories.length - 1 && <div className="category-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;