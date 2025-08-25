import React, { useEffect, useState } from 'react'

const images = [
  '/images/dispositivo-naranja.png',
  '/images/dispositivo-verde.png',
]

const HeroSection = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              Innovación Médica Argentina
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Dispositivos Médicos de <span className="text-primary">Precisión</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Desarrollamos y fabricamos autoinyectores y pens de alta calidad para la industria farmacéutica,
              mejorando la salud y el bienestar de pacientes en toda Argentina y el mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-6 py-2  font-medium rounded bg-primary hover:bg-primary/90 text-white transition-colors">
                Ver Productos
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex items-center justify-center px-6 py-2  font-medium rounded border border-primary text-primary bg-white hover:bg-primary/10 transition-colors">
                Contactar Ahora
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={images[current]}
              alt="Dispositivo médico Dis+"
              className="rounded-lg shadow-2xl transition-all duration-700"
              style={{ minHeight: 260, maxHeight: 320, objectFit: 'contain' }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-3 h-3 rounded-full ${current === idx ? 'bg-primary' : 'bg-muted'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection