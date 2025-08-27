import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductosSection from './components/ProductosSection'
import NosotrosSection from './components/NosotrosSection'
import InfoSection from './components/InfoSection'
import ContactoSection from './components/ContactoSection'
import EquipoSection from './components/EquipoSection'
import Footer from './components/Footer'
import ProductoDetalle from './components/ProductoDetalle'
import NovedadesSection from './components/NovedadesSection'
import './App.css'

function App() {
  const [idioma, setIdioma] = useState('es') // 'es' o 'en'

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header idioma={idioma} setIdioma={setIdioma} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection idioma={idioma} />
                <ProductosSection idioma={idioma} />
                <NovedadesSection idioma={idioma} />
                <NosotrosSection idioma={idioma} />
{/*                 <InfoSection idioma={idioma} /> */}
                <ContactoSection idioma={idioma} />
                <EquipoSection idioma={idioma} />
                <Footer idioma={idioma} />
              </>
            }
          />
          <Route
            path="/producto/:productoId"
            element={
              <>
                <ProductoDetalle idioma={idioma} />
                <Footer idioma={idioma} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
