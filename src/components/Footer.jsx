import React from 'react'
import logoResguar from '/images/logoresguar.svg'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bionical font-bold">dis+</div>
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

          <div>
            <h4 className="font-semibold mb-4">Ubicación</h4>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.87952675156!2d-58.375828!3d-34.598601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacbb5d70bdb%3A0x9c01350f11eafdc2!2sAv.%20C%C3%B3rdoba%20632%2C%20C1054AAS%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1756134319806!5m2!1ses-419!2sus"
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dis+"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full border-t border-gray-300/50 mt-8 sm:mt-12 pt-6 sm:pt-9 text-center text-slate-200 text-xs sm:text-sm justify-between items-center gap-4 sm:gap-0">
          <a href="https://www.resguarit.com.ar" target="_blank" rel="noopener noreferrer">
            <p className="flex items-center justify-center gap-2 hover:underline">
            <img
              src={logoResguar}
              alt="Logo Resguar IT"
              className="h-5 w-5 inline-block mr-1"
            />
            Desarrollado por <span className="font-messina">Resguar IT</span>
          </p>
          </a>
          <p>&copy; {new Date().getFullYear()} <span className='font-bionical'>dis+ </span> Medical Devices. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer