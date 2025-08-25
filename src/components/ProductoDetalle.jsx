import React from 'react'
import { useParams } from 'react-router-dom'
import {ArrowLeft} from 'lucide-react'

const productos = {
  'autoinyector-1ml': {
    nombre: 'Autoinyector 1ml',
    imagenes: [
      { src: '/images/dispositivo-naranja.png', label: 'A', desc: 'SKC (Tapa Llave)' },
      { src: '/images/dispositivo-naranja.png', label: 'B', desc: 'AR (Antirretroide)' },
      { src: '/images/dispositivo-naranja.png', label: 'C', desc: 'DCW (Ventana Control)' }
    ],
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
    imagenes: [
      { src: '/images/dispositivo-verde.png', label: 'A', desc: 'Vista A' },
      { src: '/images/dispositivo-verde.png', label: 'B', desc: 'Vista B' },
      { src: '/images/dispositivo-verde.png', label: 'C', desc: 'Vista C' }
    ],
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

const ProductoDetalle = () => {
  const { productoId } = useParams()
  const producto = productos[productoId]

  if (!producto) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
        <p>El producto solicitado no existe.</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <div className="mb-8">
        <a href="/#productos" className="text-primary flex font-medium gap-2 hover:underline items-center"><ArrowLeft size={20} /> Volver</a>
      </div>
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-primary mb-2">{producto.nombre}</h1>
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
            Aplicación en {producto.pasos.length} pasos
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
          <h2 className="text-xl font-bold text-primary mb-6">Características</h2>
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
          Descargar folleto
        </a>
      </div>

    </div>
  )
}

export default ProductoDetalle