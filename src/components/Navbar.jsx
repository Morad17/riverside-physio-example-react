import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/riverside-logo.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`navbar${open ? ' is-open' : ''}`}>
      <nav className="navbar__inner" aria-label="Main">
        <NavLink to="/" className="navbar__brand" onClick={close}>
          <img src={logo} alt="" className="navbar__logo" />
          <span>Riverside</span>
        </NavLink>

        <div id="navbar-menu" className="navbar__menu">
          <ul className="navbar__links">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className="navbar__link"
                  onClick={close}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="navbar__cta" onClick={close}>
            Book Now
          </NavLink>
        </div>

        <button
          type="button"
          className="navbar__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="navbar-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
