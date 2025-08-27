import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {ArrowLeft} from 'lucide-react'

const productosData = {
  es: {
    'autoinyector-1ml': {
      nombre: 'Autoinyector 1ml',
      pasos: [
        { texto: 'Abrir dispositivo y colocar jeringa.', img: '/images/paso1-naranja.jpg' },
        { texto: 'Cargar el dispositivo y cerrar.', img: '/images/paso2-naranja.jpg' },
        { texto: 'Retirar la tapa llave y colocarla en el otro extremo, como llave disparadora del dispositivo.', img: '/images/paso3-naranja.jpg' },
        { texto: 'Retirar el capuchón de la jeringa, girar la llave y aplicar (inyectar) el medicamento.', img: '/images/paso4-naranja.jpg' }
      ],
      folleto: '/archivos/Autoinyector-esp.pdf',
      detalles: [
        'Para monodosis con jeringas pre-llenadas de 1 ml listas para usar con la dosis exacta.',
        'Fácil transporte.',
        'Uso personal.',
        'Tamaño ergonómico para aplicación manual, cómoda y precisa.',
        'Polímeros de primera calidad altamente resistentes a caídas e impactos.',
        'Manual de uso.'
      ]
    },
    'pen-1-5-3ml': {
      nombre: 'Pen 1,5 / 3ml',
      pasos: [
        { texto: 'Abrir dispositivo y colocar ampolla.', img: '/images/paso1-verde.jpg' },
        { texto: 'Cerrar y enroscar la tapa con la aguja.', img: '/images/paso2-verde.jpg' },
        { texto: 'Regular la dosis, destapar la aguja y aplicar.' }
      ],
      folleto: '/archivos/Pen-esp.pdf',
      detalles: [
        'Pestaña antirrolido.',
        'Sistema de reseteo de dosis.',
        'Escala registro dosis.',
        'Para múltiples dosis con carpoules listos para usar.',
        'Fácil transporte. Uso personal.',
        'Tamaño ergonómico para aplicación manual, cómoda y precisa.',
        'Polímeros de primera calidad altamente resistentes a caídas e impactos.',
        'Manual de uso.'
      ]
    }
  },
  en: {
    'autoinyector-1ml': {
      nombre: 'Autoinjector 1ml',
      pasos: [
        { texto: 'Open device and place the syringe inside it.', img: '/images/paso1-naranja.jpg' },
        { texto: 'Load the device and close it.', img: '/images/paso2-naranja.jpg' },
        { texto: 'Remove the safety cap and place it on the other end to function as the trigger.', img: '/images/paso3-naranja.jpg' },
        { texto: ' Remove the cap from the syringe and inject the medication.', img: '/images/paso4-naranja.jpg' }
      ],
      folleto: '/archivos/Autoinyector-esp.pdf', // Assuming same brochure for both languages
      detalles: [
        'For single doses with pre-filled 1 ml syringes ready to use with the exact dose.',
        'Easy to transport.',
        'Personal use.',
        'Ergonomic size for convenient and accurate manual usage.',
        'Top-quality polymers that are highly resistant to falls and impacts.',
        'User\'s manual.'
      ]
    },
    'pen-1-5-3ml': {
      nombre: 'Pen 1.5 / 3ml',
      pasos: [
        { texto: 'Open device and place the carpoule inside it.', img: '/images/paso1-verde.jpg' },
        { texto: 'Close the device and screw in the cap with the syringe.', img: '/images/paso2-verde.jpg' },
        { texto: 'Remove the cap from the syringe and inject the medication.' }
      ],
      folleto: '/archivos/Pen-esp.pdf', // Assuming same brochure for both languages
      detalles: [
        'Antirolling tabs.',
        'Multiple doses resetting system.',
        'Doses register scale.',
        'For multiple doses with pre-filled carpoule containing the medicine',
        'Easy to transport. Personal use.',
        'Ergonomic size for convenient and accurate manual usage.',
        'Top-quality polymers that are highly resistant to falls and impacts.',
        'User\'s manual.'
      ]
    }
  }
}

const IconCheck = () => (
  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M9 12l2 2l4-4" />
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const IconDownload = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
  </svg>
)

const ProductoDetalle = ({idioma}) => {

  const textos = {
    es:{
      volver: "Volver",
      aplicacion: "Aplicación en",
      pasos: "pasos",
      caracteristicas: "Características",
      descargar: "Descargar folleto",
      noEncontrado: "Producto no encontrado",
      noExiste: "El producto solicitado no existe."
    },
    en:{
      volver: "Back",
      aplicacion: "Application in",
      pasos: "steps",
      caracteristicas: "Features",
      descargar: "Download brochure",
      noEncontrado: "Product not found",
      noExiste: "The requested product does not exist."
    }
  }

  const { productoId } = useParams()
  const producto = productosData[idioma][productoId]

  if (!producto) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">{textos[idioma].noEncontrado}</h2>
        <p>{textos[idioma].noExiste}</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <div className="mb-8">
        <Link to="/#productos" className="text-primary flex font-medium gap-2 hover:underline items-center"><ArrowLeft size={20} /> {textos[idioma].volver}</Link>
      </div>
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-foreground mb-2">{producto.nombre}</h1>
      </div>

      {/* Main Product Views */}
      <div className="bg-white rounded-lg   mb-8">
        <div className="flex justify-center">
          <div className=" rounded-lg  h-80 flex items-center justify-center">
            <img
              src={
                productoId === 'autoinyector-1ml'
                  ? '/images/completo-naranja.png'
                  : '/images/completo-verde.png'
              }
              alt={producto.nombre}
              className="max-h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Application Steps */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-6">
            {textos[idioma].aplicacion} {producto.pasos.length} {textos[idioma].pasos}
          </h2>
          <div className="space-y-6">
            {producto.pasos.map((paso, idx) => (
              <div className="flex items-start gap-4" key={idx}>
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <p className="text-sm text-gray-700 mb-2">{paso.texto}</p>
                  {/* Solo mostrar imagen si existe */}
                  {paso.img && (
                    <div className="rounded p-2 h-12 flex items-center">
                      <img src={paso.img} alt={`Paso ${idx + 1}`} className="h-10 w-auto object-contain" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-6">{textos[idioma].caracteristicas}</h2>
          <div className="space-y-4">
            {producto.detalles.map((detalle, idx) => (
              <div className="flex items-start gap-3" key={idx}>
                <IconCheck />
                <p className="text-sm text-gray-700">{detalle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-8 flex justify-start">
        <a
          href={producto.folleto}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg flex items-center gap-2 font-medium"
        >
          <IconDownload />
          {textos[idioma].descargar}
        </a>
      </div>

    </div>
  )
}

export default ProductoDetalle