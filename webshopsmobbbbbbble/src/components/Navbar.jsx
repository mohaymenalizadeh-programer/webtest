import React, { useState } from 'react'
import "../styles/Navbar.css"

const links = [
  { id: 1, label: 'خانه', href: '#' },
  { id: 2, label: 'محصولات', href: '#' },
  { id: 3, label: 'درباره ما', href: '#' },
  { id: 4, label: 'وبلاگ', href: '#' },
  { id: 5, label: 'تماس با ما', href: '#' },
]

function LeafIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 3c-5 4-8 9-8 14a8 8 0 0 0 16 0c0-5-3-10-8-14z" />
      <path d="M16 9v20" />
      <path d="M16 15l-4-3" />
      <path d="M16 20l-5-4" />
      <path d="M16 15l4-3" />
      <path d="M16 20l5-4" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5.5 8h13l1 12h-15l1-12z" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(1)

  const closeMenu = () => setOpen(false)

  const selectLink = (id) => {
    setActive(id)
    setOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
      <div className="navbar-actions">
          <button type="button" className="navbar-login">ورود / ثبت نام</button>
          <button type="button" className="navbar-icon-btn" aria-label="سبد خرید"><CartIcon /></button>
          <button type="button" className="navbar-icon-btn" aria-label="جستجو"><SearchIcon /></button>
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setOpen(true)}
            aria-label="باز کردن منو"
          >
            <MenuIcon />
          </button>
        </div>

        <nav className="navbar-links" aria-label="منوی اصلی">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={active === link.id ? 'active' : ''}
              onClick={() => selectLink(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>


        <a href="#" className="navbar-logo">
          <LeafIcon />
          <span>بلو</span>
        </a>
      </div>

      <div className={open ? 'navbar-backdrop show' : 'navbar-backdrop'} onClick={closeMenu} />

      <aside className={open ? 'drawer open' : 'drawer'}>
        <button type="button" className="drawer-close" onClick={closeMenu} aria-label="بستن منو">
          <CloseIcon />
        </button>

        <div className="drawer-logo">
          <LeafIcon />
          <span>بلو</span>
        </div>

        <nav className="drawer-links" aria-label="منوی موبایل">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={active === link.id ? 'active' : ''}
              onClick={() => selectLink(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="drawer-icons">
          <button type="button" className="navbar-icon-btn" aria-label="سبد خرید"><CartIcon /></button>
          <button type="button" className="navbar-icon-btn" aria-label="جستجو"><SearchIcon /></button>
        </div>
      </aside>
    </header>
  )
}