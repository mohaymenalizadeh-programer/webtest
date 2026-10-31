import React, { useState, useEffect } from 'react'
import "../styles/Homepage.css"

const INTERVAL = 2000

const slides = [
  {
    id: 1,
    title: 'سرویس خواب',
    subtitle: 'ترکیبی از راحتی، زیبایی و آرامش',
    button: 'مشاهده محصولات',
    link: '#',
    image: './images/file_000000001060820a9ae426415381bf4d.png',
    alt: 'سرویس خواب',
  },
  {
    id: 2,
    title: 'تشک طبی',
    subtitle: 'خوابی عمیق با حمایت کامل از بدن',
    button: 'مشاهده محصولات',
    link: '#',
    image: './images/twoooooo.webp',
    alt: 'تشک طبی',
  },

]

export default function Homepage() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(next, INTERVAL)
    return () => clearTimeout(timer)
  }, [current, paused])

  return (
    <main>
      <section
        className="hero"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="hero-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const Heading = index === 0 ? 'h1' : 'h2'
            return (
              <div className="hero-slide" key={slide.id}>
                <img src={slide.image} alt={slide.alt} />
                <div className="hero-content">
                  <Heading className="hero-title">{slide.title}</Heading>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <a href={slide.link} className="hero-btn">
                    <span>{slide.button}</span>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M19 12H5" />
                      <path d="M11 6l-6 6 6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <button type="button" className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="اسلاید قبلی">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button type="button" className="hero-arrow hero-arrow-next" onClick={next} aria-label="اسلاید بعدی">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              className={index === current ? 'hero-dot active' : 'hero-dot'}
              onClick={() => setCurrent(index)}
              aria-label={`رفتن به اسلاید ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  )
}