import React from 'react'

const ContactoSection = () => {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Contacto</h2>
          <p className="text-xl text-muted-foreground">
            Estamos aquí para ayudarte con tus necesidades de dispositivos médicos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">Información de Contacto</h3>
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
                    <div className="text-muted-foreground">(+5411) 44.69.52.25</div>
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
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contactos Directos</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium">Carlos Andrea Fechino</div>
                  <div className="text-muted-foreground">Mobile: (+5411) 44.09.72.13</div>
                  <div className="text-muted-foreground">cafechino@dis-positivo.com.ar</div>
                </div>
                <div>
                  <div className="font-medium">Claudio Fabian Culini</div>
                  <div className="text-muted-foreground">Mobile: (+5411) 51.84.64.67</div>
                  <div className="text-muted-foreground">cculini@dis-positivo.com.ar</div>
                </div>
              </div>
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