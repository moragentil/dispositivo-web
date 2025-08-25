import React from 'react'

const NosotrosSection = () => {
  return (
    <section id="nosotros" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Nuestra Historia</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Somos una empresa joven, radicada en el ámbito de la ciudad de Buenos Aires, Argentina, nacida durante
                el año 2012, a partir de la venta de sus dos primeros proyectos, AUTOINYECTOR y PEN.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Su fundador, Carlos Andrea Fechino, proviene de la industria farmacéutica, habiendo trabajado en la
                empresa de su familia, dedicada al diseño y fabricación de máquinas automáticas de empaque primario y
                secundario.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nacimos como una empresa dedicada a pensar, desarrollar, diseñar y fabricar EL DISPOSITIVO adecuado
                para cada necesidad, que ayude al paciente a lograr una correcta auto-administración de un fármaco,
                evitando errores en la terapia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Proyectos Completados</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-l-primary bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-2 font-serif text-lg font-bold mb-2 text-primary">
                {/* Award icon */}
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M8 16l-2 5m10-5l2 5M8 16h8" />
                </svg>
                Nuestra Visión
              </div>
              <p className="text-muted-foreground">
                Es nuestra visión que los equipos DIS+ sean capaces de resolver plenamente las demandas de la
                industria farmacéutica y los pacientes, en el presente y en el futuro, desarrollando nuestros
                productos para mejorar la salud y el bienestar de toda la gente.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                {/* Shield icon */}
                <svg className="h-8 w-8 text-primary mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6z" />
                </svg>
                <div className="font-semibold">Calidad</div>
                <div className="text-sm text-muted-foreground">Certificada</div>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                {/* Zap icon */}
                <svg className="h-8 w-8 text-primary mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <div className="font-semibold">Innovación</div>
                <div className="text-sm text-muted-foreground">Constante</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NosotrosSection