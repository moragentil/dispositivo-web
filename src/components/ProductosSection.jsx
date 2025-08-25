import React from 'react'

const ProductosSection = () => {
  return (
    <section id="productos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Nuestros Productos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dispositivos médicos diseñados con precisión para satisfacer las necesidades más exigentes de la industria
            farmacéutica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group hover:shadow-xl transition-all duration-300 rounded-lg bg-white p-6">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
              <img src="/autoinjector-medical-device-orange-white.png" alt="Autoinyector 1ml" className="w-32 h-32 object-contain" />
            </div>
            <div className="text-xl font-serif mb-2">Autoinyector 1ml</div>
            <div className="text-muted-foreground mb-2">
              Dispositivo de inyección automática de alta precisión para medicamentos líquidos.
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Dosificación precisa de 1ml</li>
              <li>• Mecanismo de seguridad integrado</li>
              <li>• Fácil uso para pacientes</li>
            </ul>
            <button
              className="w-full py-2 px-4 border border-primary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-primary font-semibold"
            >
              Descargar Folleto
            </button>
          </div>

          <div className="group hover:shadow-xl transition-all duration-300 rounded-lg bg-white p-6">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
              <img src="/medical-pen-injector-device-white-green.png" alt="Pen 1,5/3ml" className="w-32 h-32 object-contain" />
            </div>
            <div className="text-xl font-serif mb-2">Pen 1,5/3ml</div>
            <div className="text-muted-foreground mb-2">
              Pluma inyectora reutilizable con cartuchos intercambiables para tratamientos prolongados.
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Capacidad dual: 1,5ml y 3ml</li>
              <li>• Cartuchos intercambiables</li>
              <li>• Diseño ergonómico</li>
            </ul>
            <button
              className="w-full py-2 px-4 border border-primary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent text-primary font-semibold"
            >
              Descargar Folleto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductosSection;