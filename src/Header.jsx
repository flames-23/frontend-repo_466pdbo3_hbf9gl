import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const navClass = ({ isActive }) =>
    `px-3 py-2 text-sm tracking-wide transition-colors ${
      isActive ? 'text-black' : 'text-black/70 hover:text-black'
    }`

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-amber-600 to-rose-500" />
            <span className="font-semibold tracking-wider">Rallye Solidrive</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navClass}>Accueil</NavLink>
            <NavLink to="/rallye" className={navClass}>Le Rallye</NavLink>
            <NavLink to="/solidarite" className={navClass}>Solidarité</NavLink>
            <NavLink to="/galerie" className={navClass}>Galerie</NavLink>
            <NavLink to="/partenaires" className={navClass}>Partenaires</NavLink>
            <NavLink to="/inscription" className="ml-2 inline-flex items-center rounded-full border border-black/20 px-4 py-2 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] focus:outline-none">
              Participer
            </NavLink>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            <NavLink to="/" className={navClass}>Accueil</NavLink>
            <NavLink to="/rallye" className={navClass}>Le Rallye</NavLink>
            <NavLink to="/solidarite" className={navClass}>Solidarité</NavLink>
            <NavLink to="/galerie" className={navClass}>Galerie</NavLink>
            <NavLink to="/partenaires" className={navClass}>Partenaires</NavLink>
            <NavLink to="/inscription" className={navClass}>Participer</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
