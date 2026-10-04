import { Link } from 'react-router-dom'
import logo from '../assets/img/riverside-logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <img src={logo} alt="" className="footer__logo" />
            <span>Riverside Physio</span>
          </Link>
          <p>Expert physiotherapy in Leamington Spa.</p>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h2 className="footer__heading">Site links</h2>
          <ul className="footer__links">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Get in touch</h2>
          <ul className="footer__links">
            <li>01926 xxx xxx</li>
            <li>hello@riversidephysio.co.uk</li>
            <li>Mon–Fri 8am–7pm, Sat 9am–1pm</li>
          </ul>
        </div>
      </div>

      <p className="footer__copy">
        &copy; {new Date().getFullYear()} Riverside Physio. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
