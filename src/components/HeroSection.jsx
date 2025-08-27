import React, { useEffect, useState } from 'react'

const images = [
  '/images/dispositivo-naranja.png',
  '/images/dispositivo-verde.png',
]

const HeroSection = ({ idioma }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const textos = {
    es: {
      subtitulo: "Innovación Médica Argentina",
      titulo: "Dispositivos Médicos de",
      tituloSpan: "Precisión",
      descripcion:
        "Desarrollamos y fabricamos autoinyectores y pens de alta calidad para la industria farmacéutica, mejorando la salud y el bienestar de pacientes en toda Argentina y el mundo.",
      botonVer: "Ver Productos",
      botonContactar: "Contactar Ahora"
      },
    en: {
      subtitulo: "Argentinian Medical Innovation",
      titulo: "Precision",
      tituloSpan: "Medical Devices",
      descripcion:
        "We develop and manufacture high-quality auto-injectors and pens for the pharmaceutical industry, improving the health and well-being of patients throughout Argentina and the world.",
      botonVer: "View Products",
      botonContactar: "Contact Now"
    },
  }

  return (
    <section id="hero" className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
              {textos[idioma].subtitulo}
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              {textos[idioma].titulo} <span className="text-primary">{textos[idioma].tituloSpan}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {textos[idioma].descripcion}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#productos" >
              <button className="hover:cursor-pointer flex items-center justify-center px-6 py-2  font-medium rounded bg-primary hover:bg-primary/90 hover:scale-105 text-transform text-white transition-colors">
                {textos[idioma].botonVer}
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              </a>
              <button className="hover:cursor-pointer flex items-center justify-center px-6 py-2  font-medium rounded border border-primary text-primary bg-white hover:scale-105 text-transform hover:bg-primary/10 transition-colors">
                {textos[idioma].botonContactar}
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