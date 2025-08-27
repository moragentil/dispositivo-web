import React from 'react'

// Contact data centralizado
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

const ContactoSection = ({idioma}) => {

const textos ={
  es:{
    titulo: "Contacto",
    descripcion: "Estamos aquí para ayudarte con tus necesidades de dispositivos médicos",
    infoTitulo: "Información de Contacto",
    direccion: "Dirección",
    telefono: "Teléfono",
    contactosDirectos: "Contactos Directos",
    formTitulo: "Envíanos un Mensaje",
    formSubtitulo: "Completa el formulario y nos pondremos en contacto contigo",
    nombre: "Nombre",
    placeholderNombre: "Tu Nombre",
    apellido: "Apellido",
    placeholderApellido: "Tu Apellido",
    email: "Email",
    placeholderEmail: "tu@email.com",
    mensaje: "Mensaje",
    placeholderMensaje: "Escribe tu mensaje aquí",
    botonEnviar: "Enviar Mensaje",
  },
  en:{
    titulo: "Contact",
    descripcion: "We are here to help you with your medical device needs",
    infoTitulo: "Contact Information",
    direccion: "Address",
    telefono: "Phone",
    contactosDirectos: "Direct Contacts",
    formTitulo: "Send Us a Message",
    formSubtitulo: "Fill out the form and we will get in touch with you",
    placeholderNombre: "Your Name",
    placeholderApellido: "Your Last Name",
    placeholderEmail: "your@email.com",
    placeholderMensaje: "Write your message here",
    botonEnviar: "Send Message",
    nombre: "Name",
    apellido: "Last Name",
    email: "Email",
    mensaje: "Message"
  }
}

  return (
    <section id="contacto" className="py-12 scroll-mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">{textos[idioma].titulo}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {textos[idioma].descripcion}
          </p>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-6">{textos[idioma].infoTitulo}</h3>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className='grid grid-cols-2 '>
              <div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    {/* MapPin icon */}
                    <svg className="h-5 w-5 text-primary mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z" />
                      <circle cx="12" cy="11" r="2" />
                    </svg>
                    <div>
                      <div className="text-sm sm:text-base font-semibold">{textos[idioma].direccion}</div>
                      <div className="text-sm sm:text-base text-muted-foreground" style={{ whiteSpace: 'pre-line' }}>
                        {contactoData.direccion}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Phone icon */}
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.35 1.53.59 2.34.72A2 2 0 0 1 21 16.91z" />
                    </svg>
                    <div>
                      <div className="text-sm sm:text-base font-semibold">{textos[idioma].telefono}</div>
                      <div className="text-sm sm:text-base text-muted-foreground">{contactoData.telefono}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Mobile icon */}
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="7" y="2" width="10" height="20" rx="2" />
                      <circle cx="12" cy="18" r="1" />
                    </svg>
                    <div>
                      <div className="text-sm sm:text-base font-semibold">Mobile</div>
                      <div className="text-sm sm:text-base text-muted-foreground">{contactoData.mobile}</div>
                    </div>
                  </div>


                <div className="flex items-center gap-3">
                  {/* Mail icon */}
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                  <div>
                    <div className="text-sm sm:text-base font-semibold">Email</div>
                    <div className="text-sm sm:text-base text-muted-foreground">{contactoData.email}</div>
                  </div>
                </div>
                                </div>
              </div>
              <div>
                <h4 className="text-base  font-semibold mb-2 sm:mb-4">{textos[idioma].contactosDirectos}</h4>
                <div className="space-y-3 text-xs sm:text-sm">
                  {contactoData.directos.map((contact, idx) => (
                    <div key={idx}>
                      <div className="font-medium">{contact.nombre}</div>
                      <div className="text-muted-foreground">Mobile: {contact.mobile}</div>
                      <div className="text-muted-foreground">{contact.email}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.87952675156!2d-58.375828!3d-34.598601!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacbb5d70bdb%3A0x9c01350f11eafdc2!2sAv.%20C%C3%B3rdoba%20632%2C%20C1054AAS%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1756134319806!5m2!1ses-419!2sus"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dis+"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 sm:p-8">
            <div className="mb-6">
              <div className="font-serif text-xl font-bold mb-2">{textos[idioma].formTitulo}</div>
              <div className="text-muted-foreground mb-4">{textos[idioma].formDescripcion}</div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">{textos[idioma].nombre} *</label>
                  <input className="w-full border rounded px-3 py-1 sm:py-2 mt-1 text-sm sm:text-base" placeholder={textos[idioma].nombrePlaceholder} />
                </div>
                <div>
                  <label className="text-sm font-medium">{textos[idioma].apellido} *</label>
                  <input className="w-full border rounded px-3 py-1 sm:py-2 mt-1 text-sm sm:text-base" placeholder={textos[idioma].apellidoPlaceholder} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">{textos[idioma].email} *</label>
                <input type="email" className="w-full border rounded px-3 py-1 sm:py-2 mt-1 text-sm sm:text-base" placeholder={textos[idioma].emailPlaceholder} />
              </div>
              <div>
                <label className="text-sm font-medium">{textos[idioma].mensaje} *</label>
                <textarea className="w-full border rounded px-3 py-1 sm:py-2 mt-1 text-sm sm:text-base" rows="4" placeholder={textos[idioma].mensajePlaceholder}></textarea>
              </div>
              <div>
                <button className="w-full bg-primary text-white rounded px-4 py-1 sm:py-2 font-semibold hover:bg-primary-dark transition-colors">
                  {textos[idioma].botonEnviar}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactoSection