import React from 'react'

const InfoSection = ({idioma}) => {

const textos = {
  es:{
    titulo: "¿Por Qué Elegir",
    descripcion: "Trabajamos en forma mancomunada con la industria farmacéutica y los pacientes",
    experiencia:"Experiencia Comprobada",
    expTexto: "Más de una década desarrollando soluciones médicas innovadoras para la industria farmacéutica.",
    alcance: "Alcance Internacional",
    alcanceTexto: "Nuestros dispositivos mejoran la vida de pacientes en Argentina y el mundo.",
    calidad: "Calidad Garantizada",
    calidadTexto: "Cumplimos con los más altos estándares de calidad y seguridad médica.",
  },
  en: {
    titulo: "Why Choose",
    descripcion: "We work hand in hand with the pharmaceutical industry and patients.",
    experiencia: "Proven Experience",
    expTexto: "Over a decade of developing innovative medical solutions for the pharmaceutical industry.",
    alcance: "International Reach",
    alcanceTexto: "Our devices improve the lives of patients in Argentina and around the world.",
    calidad: "Guaranteed Quality",
    calidadTexto: "We comply with the highest standards of medical quality and safety.",
  }
}

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-2 sm:mb-4">{textos[idioma].titulo} <span className='font-bionical'>dis+</span>?</h2>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            {textos[idioma].descripcion}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* Users icon */}
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-3-3.87M9 21v-2a4 4 0 0 1 3-3.87M7 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm5 8a4 4 0 0 0-3-3.87" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">{textos[idioma].experiencia}</h3>
            <p className="opacity-90">
              {textos[idioma].expTexto}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* Globe icon */}
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">{textos[idioma].alcance}</h3>
            <p className="opacity-90">{textos[idioma].alcanceTexto}</p>
          </div>

          <div className="text-center">
            <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* Shield icon */}
              <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold mb-2">{textos[idioma].calidad}</h3>
            <p className="opacity-90">{textos[idioma].calidadTexto}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection