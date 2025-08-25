import React from 'react'
// Si tienes estos componentes, importa Button y Menu. Si no, usa un botón simple y un ícono SVG.
// import { Button } from '../ui/Button'
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold">dis+</div>
            <div className="text-sm font-sans uppercase tracking-wider">Medical Devices</div>
          </div>
          <nav className="hidden md:flex items-center space-x-8 ">
            <a href="#productos" className="hover:text-accent transition-colors text-white">
              Productos
            </a>
            <a href="#nosotros" className="hover:text-accent transition-colors text-white">
              Quiénes Somos
            </a>
            <a href="#contacto" className="hover:text-accent transition-colors text-white">
              Contacto
            </a>
            <a href="#equipo" className="hover:text-accent transition-colors text-white">
              Sumate al Equipo
            </a>
            <div className="flex items-center space-x-2 text-sm">
              <span>Español</span>
              <span>/</span>
              <span className="text-accent">English</span>
            </div>
          </nav>
          <button className="md:hidden p-2 rounded hover:bg-accent transition-colors">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;