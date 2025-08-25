import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-serif font-bold">dis+</div>
              <div className="text-sm uppercase tracking-wider">Medical Devices</div>
            </div>
            <p className="opacity-90 text-sm leading-relaxed">
              Desarrollamos dispositivos médicos innovadores que mejoran la calidad de vida de pacientes en Argentina
              y el mundo.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div>Tel: (+5411) 44.69.52.25</div>
              <div>Mobile: (+54 9 11) 44.09.72.13</div>
              <div>Email: sales@dis-positivo.com.ar</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div>
                <a href="#productos" className="hover:text-accent transition-colors">
                  Productos
                </a>
              </div>
              <div>
                <a href="#nosotros" className="hover:text-accent transition-colors">
                  Quiénes Somos
                </a>
              </div>
              <div>
                <a href="#contacto" className="hover:text-accent transition-colors">
                  Contacto
                </a>
              </div>
              <div>
                <a href="#equipo" className="hover:text-accent transition-colors">
                  Sumate al Equipo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2024 Dis+ Medical Devices. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer