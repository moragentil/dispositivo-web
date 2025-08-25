import React from 'react'

const EquipoSection = () => {
  return (
    <section id="equipo" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Sumate al Equipo</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Buscamos profesionales apasionados por la innovación médica y el desarrollo de dispositivos que mejoren la
            vida de los pacientes.
          </p>

          <div className="bg-white rounded-lg shadow text-left p-8">
            <div className="mb-6">
              <div className="font-serif text-xl font-bold mb-2">Únete a Dis+ Medical Devices</div>
              <div className="text-muted-foreground mb-4">
                Forma parte de un equipo que está transformando la industria de dispositivos médicos
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Lo que ofrecemos:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Ambiente de trabajo innovador</li>
                    <li>• Proyectos desafiantes</li>
                    <li>• Crecimiento profesional</li>
                    <li>• Impacto en la salud global</li>
                  </ul>
                </div>

              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm mb-2">
                  <strong>¿Interesado en formar parte de nuestro equipo?</strong>
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Envíanos tu CV para trabajar con nosotros al siguiente email:
                </p>
                <div className="flex items-center gap-2">
                  {/* Mail icon */}
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                  <a href="mailto:careers@dis-positivo.com.ar" className="text-primary font-medium">
                    careers@dis-positivo.com.ar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EquipoSection