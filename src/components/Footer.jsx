import React from 'react'
import logoResguar from '/images/logoresguar.svg'

export const contactoData = {
  direccion: 'Av. Córdoba 632, 9° "I"\nC.A. de Buenos Aires, Argentina',
  telefono: '(+5411) 44695225',
  mobile: '(+5411) 44097213',
  email: 'sales@dis-positivo.com.ar',
  directos: [
    {
      nombre: 'Carlos Andrea Fechino',
      mobile: '(+5411) 44097213',
      email: 'cafechino@dis-positivo.com.ar'
    },
    {
      nombre: 'Claudio Fabian Culini',
      mobile: '(+5411) 51846467',
      email: 'cfculini@dis-positivo.com.ar'
    }
  ]
}

const Footer = ({idioma}) => {

const textos = {
  es: {
    descripcion:"Desarrollamos dispositivos médicos innovadores que mejoran la calidad de vida de pacientes en Argentina y el mundo.",
    contacto: "Contacto",
    navegacion: "Navegación",
    linkProd: "Productos",
    linkNosotros: "Quiénes Somos",
    linkContacto: "Contacto",
    linkEquipo: "Sumate al Equipo",
    ubicacion: "Ubicación",
    desarrollo: "Desarrollado por",
    derechos: "Todos los derechos reservados."
  },
  en: {
    descripcion: "We develop innovative medical devices that improve the quality of life for patients in Argentina and around the world.",
    contacto: "Contact",
    navegacion: "Navigation",
    linkProd: "Products",
    linkNosotros: "About Us",
    linkContacto: "Contact",
    linkEquipo: "Join the Team",
    ubicacion: "Location",
    desarrollo: "Developed by",
    derechos: "All rights reserved."
  }
}

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bionical ">dis+</div>
              <div className="text-sm uppercase tracking-wider">Medical Devices</div>
            </div>
            <p className="opacity-90 text-sm leading-relaxed">
              {textos[idioma].descripcion}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{textos[idioma].contacto}</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div>Tel: {contactoData.telefono}</div>
              <div>Mobile: {contactoData.mobile}</div>
              <div>Email: {contactoData.email}</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{textos[idioma].navegacion}</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div>
                <a href="#productos" className="hover:text-accent transition-colors">
                  {textos[idioma].linkProd}
                </a>
              </div>
              <div>
                <a href="#nosotros" className="hover:text-accent transition-colors">
                  {textos[idioma].linkNosotros}
                </a>
              </div>
              <div>
                <a href="#contacto" className="hover:text-accent transition-colors">
                  {textos[idioma].linkContacto}
                </a>
              </div>
              <div>
                <a href="#equipo" className="hover:text-accent transition-colors">
                  {textos[idioma].linkEquipo}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{textos[idioma].ubicacion}</h4>
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
            {textos[idioma].desarrollo} <span className="font-messina">Resguar IT</span>
          </p>
          </a>
          <p>&copy; {new Date().getFullYear()} <span className='font-bionical'>dis+ </span> Medical Devices. {textos[idioma].derechos}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer