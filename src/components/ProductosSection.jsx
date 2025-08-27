import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProductosSection = ({ idioma }) => {
  const navigate = useNavigate()

  // Función para navegar y hacer scroll arriba
  const handleDetalle = (url) => {
    navigate(url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const textos = {
    es:{
      titulo: "Nuestros Productos",
      subtitulo: "Dispositivos médicos diseñados con precisión para satisfacer las necesidades más exigentes de la industria farmacéutica.",
      producto1: "Autoinyector 1ml",
      desc1: "Dispositivo de inyección automática de alta precisión para medicamentos líquidos.",
      li11: "• Dosificación precisa de 1ml",
      li12: "• Mecanismo de seguridad integrado",
      li13: "• Fácil uso para pacientes",
      botonDetalle: "Ver Detalle",
      producto2: "Pen 1,5/3ml",
      desc2: "Pluma inyectora reutilizable con cartuchos intercambiables para tratamientos prolongados.",
      li21: "• Capacidad dual: 1,5ml y 3ml",
      li22: "• Cartuchos intercambiables",
      li23: "• Diseño ergonómico",
    },
    en:{
      titulo: "Our Products",
      subtitulo: "Medical devices designed with precision to meet the most demanding needs of the pharmaceutical industry.",
      producto1: "Auto-injector 1ml",
      desc1: "High-precision automatic injection device for liquid medications.",
      li11: "• Precise dosing of 1ml",
      li12: "• Integrated safety mechanism",
      li13: "• Easy to use for patients",
      botonDetalle: "View Details",
      producto2: "Pen 1.5/3ml",
      desc2: "Reusable injector pen with interchangeable cartridges for prolonged treatments.",
      li21: "• Dual capacity: 1.5ml and 3ml",
      li22: "• Interchangeable cartridges",
      li23: "• Ergonomic design",
    }
  }

  return (
    <section id="productos" className="py-12 bg-muted/30 scroll-mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">{textos[idioma].titulo}</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {textos[idioma].subtitulo}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-8 sm:mx-auto ">
          <div className="group hover:shadow-xl transition-all duration-300 shadow-lg rounded-lg bg-white block ">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center h-36">
              <img src="/images/dispositivo-naranja.png" alt="Autoinyector 1ml" className="w-fit h-auto object-contain mt-6" />
            </div>
            <div className="p-4 flex flex-col h-60">
              <div>
                <div className="text-lg font-serif mb-1 text-gray-800">{textos[idioma].producto1}</div>
                <div className="text-muted-foreground mb-1 text-sm">
                  {textos[idioma].desc1}
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground mb-3">
                  <li>{textos[idioma].li11}</li>
                  <li>{textos[idioma].li12}</li>
                  <li>{textos[idioma].li13}</li>
                </ul>
              </div>
              <div className="mt-auto">
                <button
                  className="w-full py-1 px-3 border border-primary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-primary font-semibold text-sm"
                  type="button"
                  onClick={() => handleDetalle('/producto/autoinyector-1ml')}
                >
                  {textos[idioma].botonDetalle}
                </button>
              </div>
            </div>
          </div>

          <div className="group hover:shadow-xl transition-all duration-300 rounded-lg shadow-lg bg-white block">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center h-36">
              <img src="/images/dispositivo-verde.png" alt="Pen 1,5/3ml" className="w-fit h-auto object-contain mt-6" />
            </div>
            <div className="p-4 flex flex-col h-60">
              <div>
                <div className="text-lg font-serif mb-1 text-gray-800">{textos[idioma].producto2}</div>
                <div className="text-muted-foreground mb-1 text-sm">
                  {textos[idioma].desc2}
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground mb-3">
                  <li>{textos[idioma].li21}</li>
                  <li>{textos[idioma].li22}</li>
                  <li>{textos[idioma].li23}</li>
                </ul>
              </div>
              <div className="mt-auto">
                <button
                  className="w-full py-1 px-3 border border-primary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-primary font-semibold text-sm"
                  type="button"
                  onClick={() => handleDetalle('/producto/pen-1-5-3ml')}
                >
                  {textos[idioma].botonDetalle}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductosSection