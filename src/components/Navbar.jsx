import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          Riverside Physio
        </NavLink>
        <ul className="navbar__links">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className="navbar__link">
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
