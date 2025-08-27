import React, { useState } from 'react'
// Si tienes estos componentes, importa Button y Menu. Si no, usa un botón simple y un ícono SVG.
// import { Button } from '../ui/Button'
import { Menu, X } from 'lucide-react'

const Header = ({ idioma, setIdioma }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const textos = {
    es: {
      productos: "Productos",
      quienesSomos: "Quiénes Somos",
      contacto: "Contacto",
      sumateAlEquipo: "Sumate al Equipo",
    },
    en: {
      productos: "Products",
      quienesSomos: "Who We Are",
      contacto: "Contact",
      sumateAlEquipo: "Join our Team",
    }
  }

  const handleNavClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/">
            <div className="flex items-center space-x-2">
              <div className="text-2xl   font-bionical">dis+</div>
              <div className="text-sm font-sans uppercase tracking-wider">
                Medical Devices
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center space-x-8 ">
            <a
              href="#productos"
              className="hover:text-accent transition-colors text-white"
            >
              {textos[idioma].productos}
            </a>
            <a
              href="#nosotros"
              className="hover:text-accent transition-colors text-white"
            >
              {textos[idioma].quienesSomos}
            </a>
            <a
              href="#contacto"
              className="hover:text-accent transition-colors text-white"
            >
              {textos[idioma].contacto}
            </a>
            <a
              href="#equipo"
              className="hover:text-accent transition-colors text-white"
            >
              {textos[idioma].sumateAlEquipo}
            </a>
            <div className="flex items-center space-x-2 text-sm">
              <button
                className={idioma === 'es' ? 'hover:scale-115 text-transform ' : 'hover:scale-115 text-transform text-accent'}
                onClick={() => setIdioma('es')}
              >
                Español
              </button>
              <span>/</span>
              <button
                className={idioma === 'en' ? 'hover:scale-115 text-transform' : 'hover:scale-115 text-transform text-accent'}
                onClick={() => setIdioma('en')}
              >
                English
              </button>
            </div>
          </nav>
          <button 
            className="md:hidden p-2 rounded hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary shadow-lg">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <a href="#productos" onClick={handleNavClick} className="hover:text-accent transition-colors text-white">{textos[idioma].productos}</a>
            <a href="#nosotros" onClick={handleNavClick} className="hover:text-accent transition-colors text-white">{textos[idioma].quienesSomos}</a>
            <a href="#contacto" onClick={handleNavClick} className="hover:text-accent transition-colors text-white">{textos[idioma].contacto}</a>
            <a href="#equipo" onClick={handleNavClick} className="hover:text-accent transition-colors text-white">{textos[idioma].sumateAlEquipo}</a>
            <div className="flex items-center space-x-2 text-sm pt-4 border-t border-primary-foreground/20 w-full justify-center mt-4">
              <button
                className={idioma === 'es' ? 'hover:scale-115 text-transform ' : 'hover:scale-115 text-transform text-accent'}
                onClick={() => setIdioma('es')}
              >
                Español
              </button>
              <span>/</span>
              <button
                className={idioma === 'en' ? 'hover:scale-115 text-transform' : 'hover:scale-115 text-transform text-accent'}
                onClick={() => setIdioma('en')}
              >
                English
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header