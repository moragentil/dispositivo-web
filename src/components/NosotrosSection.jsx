import React, { useState } from 'react'

const NosotrosSection = () => {
  const [openCard, setOpenCard] = useState(null)

  const toggleCard = (cardName) => {
    setOpenCard(openCard === cardName ? null : cardName)
  }

  return (
    <section id="nosotros" className="py-8 scroll-mt-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Sección Historia */}
          <div className="space-y-8 ">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Historia</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Somos una empresa joven, radicada en el ámbito de la ciudad de Buenos Aires, Argentina, nacida durante
                el año 2012, a partir de la venta de sus dos primeros proyectos, AUTOINYECTOR y PEN.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Su fundador, Carlos Andrea Fechino, provenía de la industria farmacéutica, habiendo trabajado en la
                empresa de su familia, dedicada al diseño y fabricación de máquinas automáticas de empaque primario y
                secundario. Por su parte, su socio, Claudio Fabián Culini, está también familiarizado con el sector ya
                que se había dedicado a la fabricación de instrumental odontológico, en la empresa de su familia.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Nacimos como una empresa dedicada a pensar, desarrollar, diseñar y fabricar EL DISPOSITIVO adecuado para
                cada necesidad, que ayude al paciente a lograr una correcta auto-administración de un fármaco, evitando
                errores en la terapia.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Nuestra marca refleja nuestro objetivo: DIS+ = DISPOSITIVO
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Trabajamos en forma mancomunada con la industria farmacéutica y los pacientes, comprometiéndonos a
                ofrecer soluciones creativas e innovadoras que atiendan sus necesidades, con el único objetivo de
                obtener el mejor dispositivo médico, con la mayor precisión en la penetración y dosificación del
                fármaco.
              </p>
            </div>
          </div>

          {/* Segunda columna con tarjetas y recuadros */}
          <div className="flex flex-col h-full lg:min-h-[500px] justify-center">
            <div className="space-y-8">
              {/* Vision */}
              <div className="border-l-4 border-l-primary bg-white rounded-lg shadow overflow-hidden">
                <div
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center"
                  onClick={() => toggleCard("vision")}
                >
                  <h3 className="text-2xl font-serif font-bold text-primary">Visión</h3>
                  <svg
                    className={`h-5 w-5 text-primary transition-transform duration-200 ${openCard === "vision" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${openCard === "vision" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
                >
                  <div className="px-4 pb-4">
                    <p className="text-muted-foreground leading-relaxed mb-2 text-sm">
                      Es nuestra visión que los equipos DIS+ sean capaces de resolver plenamente las demandas de la
                      industria farmacéutica y los pacientes, en el presente y en el futuro, desarrollando nuestros
                      productos para mejorar la salud y el bienestar de toda la gente.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Preservar el medio ambiente también es nuestro objetivo, y por ello priorizamos en nuestras ideas,
                      que todo dispositivo sea reutilizable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mision */}
              <div className="border-l-4 border-l-primary bg-white rounded-lg shadow overflow-hidden">
                <div
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center"
                  onClick={() => toggleCard("mision")}
                >
                  <h3 className="text-2xl font-serif font-bold text-primary">Misión</h3>
                  <svg
                    className={`h-5 w-5 text-primary transition-transform duration-200 ${openCard === "mision" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${openCard === "mision" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
                >
                  <div className="px-4 pb-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Ayudar a que las personas vivan en forma saludable mediante la exactitud en la dosificación del
                      fármaco, nuestro objetivo constante, aplicando la simpleza de ideas y diseños, para hacer que el
                      paciente o usuario, se familiarice rápidamente con nuestros dispositivos y su utilización,
                      logrando así terapias más precisas y efectivas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Estrategia */}
              <div className="border-l-4 border-l-primary bg-white rounded-lg shadow overflow-hidden">
                <div
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center"
                  onClick={() => toggleCard("estrategia")}
                >
                  <h3 className="text-2xl font-serif font-bold text-primary">Estrategia</h3>
                  <svg
                    className={`h-5 w-5 text-primary transition-transform duration-200 ${openCard === "estrategia" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${openCard === "estrategia" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
                >
                  <div className="px-4 pb-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Tomar del universo del automatismo lo mejor o más adecuado, combinarlo con nuestras ideas y
                      aplicarlo a la necesidad específica del paciente y su tratamiento, y así resolver de la manera más
                      simple y efectiva, la correcta administración del fármaco, todo ello dentro de las más estrictas
                      normas de excelencia en lo que hacemos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recuadros Calidad e Innovación */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center flex flex-col items-center">
                {/* Shield icon */}
                <svg
                  className="h-8 w-8 text-primary mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6z" />
                </svg>
                <div className="font-semibold">Calidad</div>
                <div className="text-sm text-muted-foreground">Certificada</div>
              </div>
              <div className="text-center flex flex-col items-center">
                {/* Zap icon */}
                <svg
                  className="h-8 w-8 text-primary mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
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