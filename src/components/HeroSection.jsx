import React, { useEffect, useState } from 'react'
import { contactoData } from './ContactoSection'

const baseURL = '/demos/dispositivo/'

const images = [
  `${baseURL}images/dispositivo-naranja.png`,
  `${baseURL}images/dispositivo-verde.png`,
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
        "Fabricamos autoinyectores y pens de alta calidad, especializándonos en soluciones a medida para la industria farmacéutica.",
      botonVer: "Ver Productos",
      botonContactar: "Contactar Ahora"
      },
    en: {
      subtitulo: "Argentinian Medical Innovation",
      titulo: "Precision",
      tituloSpan: "Medical Devices",
      descripcion:
        "We manufacture high-quality auto-injectors and pens, specializing in custom solutions for the pharmaceutical industry.",
      botonVer: "View Products",
      botonContactar: "Contact Now"
    },
  }

  const formatWhatsApp = (phone) => `https://wa.me/${phone.replace(/\D/g, '')}`;

  return (
    <section id="hero" className="relative bg-background pt-16 pb-8 md:py-16 overflow-hidden">
      {/* Background Image for large screens */}
      <div className="absolute top-0 right-0 h-full w-1/2 hidden lg:block">
        <img
          src={images[current]}
          alt="Dispositivo médico Dis+"
          className="h-full w-full object-cover transition-all duration-700 [mask-image:linear-gradient(to_right,transparent,black_30%)]"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left relative z-10">
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {textos[idioma].subtitulo}
            </p>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight my-20 sm:my-0">
              {textos[idioma].titulo} <span className="text-primary">{textos[idioma].tituloSpan}</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              {textos[idioma].descripcion}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a href="#productos" >
                <button className="w-full sm:w-auto hover:cursor-pointer flex items-center justify-center px-6 py-3 font-medium bg-primary hover:bg-primary/90 text-white transition-colors">
                  {textos[idioma].botonVer}
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </a>
              <a href={formatWhatsApp(contactoData.mobile)} target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto hover:cursor-pointer flex items-center justify-center px-6 py-3 font-medium border border-primary text-primary bg-white hover:bg-primary/10 transition-colors">
                  {textos[idioma].botonContactar}
                </button>
              </a>
            </div>
          </div>

          {/* Image for mobile screens */}
          <div className="relative flex items-center justify-center lg:hidden">
            <img
              src={images[current]}
              alt="Dispositivo médico Dis+"
              className="shadow-xl transition-all duration-700"
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