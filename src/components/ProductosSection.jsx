import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Package } from 'lucide-react'

const CheckIcon = () => (
  <svg className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const productosData = {
  es: {
    producto1: {
      id: 'autoinyector-1ml',
      nombre: "Autoinyector 1ml",
      desc: "Dispositivo de inyección automática de alta precisión para medicamentos líquidos.",
      features: [
        "Dosificación precisa de 1ml",
        "Mecanismo de seguridad integrado",
        "Fácil uso para pacientes",
      ],
      imgSrc: "/images/dispositivo-naranja.png"
    },
    producto2: {
      id: 'pen-1-5-3ml',
      nombre: "Pen Reutilizable 1,5/3ml",
      desc: "Pluma inyectora con cartuchos intercambiables para tratamientos prolongados.",
      features: [
        "Capacidad dual: 1,5ml y 3ml",
        "Cartuchos intercambiables",
        "Diseño ergonómico y duradero",
      ],
      imgSrc: "/images/dispositivo-verde.png"
    },
    producto3: {
      id: 'pen-descartable',
      nombre: "Pen Descartable",
      desc: "Próximo relanzamiento. Un diseño actualizado con nuevas funcionalidades para una experiencia de usuario mejorada.",
      features: [
        "Uso único, máxima higiene",
        "Diseño compacto y ligero",
        "Funcionalidades mejoradas",
      ],
      imgSrc: "/images/dispositivo-verde.png",
      comingSoon: true
    }
  },
  en: {
    producto1: {
      id: 'autoinyector-1ml',
      nombre: "Auto-injector 1ml",
      desc: "High-precision automatic injection device for liquid medications.",
      features: [
        "Precise dosing of 1ml",
        "Integrated safety mechanism",
        "Easy to use for patients",
      ],
      imgSrc: "/images/dispositivo-naranja.png"
    },
    producto2: {
      id: 'pen-1-5-3ml',
      nombre: "Reusable Pen 1.5/3ml",
      desc: "Reusable injector pen with interchangeable cartridges for prolonged treatments.",
      features: [
        "Dual capacity: 1.5ml and 3ml",
        "Interchangeable cartridges",
        "Ergonomic and durable design",
      ],
      imgSrc: "/images/dispositivo-verde.png"
    },
    producto3: {
      id: 'pen-descartable',
      nombre: "Disposable Pen",
      desc: "Upcoming relaunch. An updated design with new features for an improved user experience.",
      features: [
        "Single use, maximum hygiene",
        "Compact and lightweight design",
        "Enhanced features",
      ],
      imgSrc: "/images/dispositivo-verde.png",
      comingSoon: true
    }
  }
};


const ProductosSection = ({ idioma }) => {
  const navigate = useNavigate()

  const handleDetalle = (url) => {
    navigate(url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const textos = {
    es:{
      titulo: "Nuestros Productos",
      subtitulo: "Dispositivos médicos diseñados con precisión para satisfacer las necesidades más exigentes de la industria farmacéutica.",
      botonDetalle: "Ver Detalle",
      proximamente: "Relanzamiento",
    },
    en:{
      titulo: "Our Products",
      subtitulo: "Medical devices designed with precision to meet the most demanding needs of the pharmaceutical industry.",
      botonDetalle: "View Details",
      proximamente: "Relaunch",
    }
  }

  const productos = [productosData[idioma].producto1, productosData[idioma].producto2, productosData[idioma].producto3];

  return (
    <section id="productos" className="py-16 bg-muted/40 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-foreground">{textos[idioma].titulo}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            {textos[idioma].subtitulo}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {productos.map((producto) => (
            <div key={producto.id} className="group bg-background border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="relative bg-muted flex items-center justify-center h-40">
                {producto.comingSoon ? (
                  <Package className="h-20 w-20 text-muted-foreground" strokeWidth={1.5} />
                ) : (
                  <img src={producto.imgSrc} alt={producto.nombre} className="w-full h-auto object-contain" />
                )}
                {producto.comingSoon && (
                  <div className="absolute top-2 right-2 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    {textos[idioma].proximamente}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-serif font-bold mb-2 text-foreground">{producto.nombre}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {producto.desc}
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  {producto.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button
                    className="w-full py-2 px-4 border border-primary  transition-colors duration-300 font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed group-hover:bg-primary group-hover:text-primary-foreground enabled:hover:bg-primary enabled:hover:text-primary-foreground bg-transparent text-primary"
                    type="button"
                    onClick={() => handleDetalle(`/producto/${producto.id}`)}
                    disabled={producto.comingSoon}
                  >
                    {textos[idioma].botonDetalle}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductosSection