import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="app">
      <Navbar />
      <main className="content" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
