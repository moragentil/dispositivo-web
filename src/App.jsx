import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductosSection from './components/ProductosSection'
import NosotrosSection from './components/NosotrosSection'
import InfoSection from './components/InfoSection'
import ContactoSection from './components/ContactoSection'
import EquipoSection from './components/EquipoSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductosSection />
      <NosotrosSection />
      <InfoSection />
      <ContactoSection />
      <EquipoSection />
      <Footer />
    </div>
  )
}

export default App
