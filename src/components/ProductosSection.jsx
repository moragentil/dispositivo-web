import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProductosSection = () => {
  const navigate = useNavigate()

  // Función para navegar y hacer scroll arriba
  const handleDetalle = (url) => {
    navigate(url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="productos" className="py-12 bg-muted/30 scroll-mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Nuestros Productos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dispositivos médicos diseñados con precisión para satisfacer las necesidades más exigentes de la industria
            farmacéutica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="group hover:shadow-xl transition-all duration-300 shadow-lg rounded-lg bg-white block">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center h-40">
              <img src="/images/dispositivo-naranja.png" alt="Autoinyector 1ml" className="w-fit h-auto object-contain" />
            </div>
            <div className="p-4 flex flex-col h-64">
              <div>
                <div className="text-lg font-serif mb-1 text-gray-800">Autoinyector 1ml</div>
                <div className="text-muted-foreground mb-1 text-sm">
                  Dispositivo de inyección automática de alta precisión para medicamentos líquidos.
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground mb-3">
                  <li>• Dosificación precisa de 1ml</li>
                  <li>• Mecanismo de seguridad integrado</li>
                  <li>• Fácil uso para pacientes</li>
                </ul>
              </div>
              <div className="mt-auto">
                <button
                  className="w-full py-1 px-3 border border-primary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-primary font-semibold text-sm"
                  type="button"
                  onClick={() => handleDetalle('/producto/autoinyector-1ml')}
                >
                  Ver Detalle
                </button>
              </div>
            </div>
          </div>

          <div className="group hover:shadow-xl transition-all duration-300 rounded-lg shadow-lg bg-white block">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center h-40">
              <img src="/images/dispositivo-verde.png" alt="Pen 1,5/3ml" className="w-fit h-auto object-contain" />
            </div>
            <div className="p-4 flex flex-col h-64">
              <div>
                <div className="text-lg font-serif mb-1 text-gray-800">Pen 1,5/3ml</div>
                <div className="text-muted-foreground mb-1 text-sm">
                  Pluma inyectora reutilizable con cartuchos intercambiables para tratamientos prolongados.
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground mb-3">
                  <li>• Capacidad dual: 1,5ml y 3ml</li>
                  <li>• Cartuchos intercambiables</li>
                  <li>• Diseño ergonómico</li>
                </ul>
              </div>
              <div className="mt-auto">
                <button
                  className="w-full py-1 px-3 border border-primary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-primary font-semibold text-sm"
                  type="button"
                  onClick={() => handleDetalle('/producto/pen-1-5-3ml')}
                >
                  Ver Detalle
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