import React from 'react'
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
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ProductosSection />
                <NosotrosSection />
                <InfoSection />
                <ContactoSection />
                <EquipoSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/producto/:productoId"
            element={
              <>
                <ProductoDetalle />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
