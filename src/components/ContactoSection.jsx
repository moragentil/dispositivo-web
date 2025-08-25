import React from 'react'

const ContactoSection = () => {
  return (
    <section id="contacto" className="py-12 scroll-mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Contacto</h2>
          <p className="text-xl text-muted-foreground">
            Estamos aquí para ayudarte con tus necesidades de dispositivos médicos
          </p>
        </div>
              <h3 className="text-2xl font-serif font-semibold mb-6">Información de Contacto</h3>

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
                    <div className="font-semibold">Dirección</div>
                    <div className="text-muted-foreground">
                      Av. Córdoba 632, 9° "I"
                      <br />
                      C.A. de Buenos Aires, Argentina
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Phone icon */}
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.35 1.53.59 2.34.72A2 2 0 0 1 21 16.91z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div className="text-muted-foreground">(+5411) 44695225</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {/* Mobile icon */}
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="7" y="2" width="10" height="20" rx="2" />
                    <circle cx="12" cy="18" r="1" />
                  </svg>
                  <div>
                    <div className="font-semibold">Mobile</div>
                    <div className="text-muted-foreground">(+5411) 44097213</div>
                  </div>
                </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Mail icon */}
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">sales@dis-positivo.com.ar</div>
                  </div>
                </div>
              </div>
<div>
              <h4 className="font-semibold mb-4">Contactos Directos</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium">Carlos Andrea Fechino</div>
                  <div className="text-muted-foreground">Mobile: (+5411) 44097213</div>
                  <div className="text-muted-foreground">cafechino@dis-positivo.com.ar</div>
                </div>
                <div>
                  <div className="font-medium">Claudio Fabian Culini</div>
                  <div className="text-muted-foreground">Mobile: (+5411) 51846467</div>
                  <div className="text-muted-foreground">cfculini@dis-positivo.com.ar</div>
                </div>
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

          <div className="bg-white rounded-lg shadow p-8">
            <div className="mb-6">
              <div className="font-serif text-xl font-bold mb-2">Envíanos un Mensaje</div>
              <div className="text-muted-foreground mb-4">Completa el formulario y nos pondremos en contacto contigo</div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Nombre *</label>
                  <input className="w-full border rounded px-3 py-2 mt-1" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="text-sm font-medium">Apellido *</label>
                  <input className="w-full border rounded px-3 py-2 mt-1" placeholder="Tu apellido" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Email *</label>
                <input type="email" className="w-full border rounded px-3 py-2 mt-1" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Mensaje *</label>
                <textarea className="w-full border rounded px-3 py-2 mt-1" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
              </div>
              <div>
                <button className="w-full bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-primary-dark transition-colors">
                  Enviar Mensaje
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