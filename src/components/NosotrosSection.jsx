import React, { useState } from 'react'

const NosotrosSection = ({idioma}) => {
  const [openCard, setOpenCard] = useState(null)

  const toggleCard = (cardName) => {
    setOpenCard(openCard === cardName ? null : cardName)
  }

  const textos = {
    es: {
      titulo: "Historia",
      historia1: "Somos una empresa joven, radicada en el ámbito de la ciudad de Buenos Aires, Argentina, nacida durante el año 2012, a partir de la venta de sus dos primeros proyectos, AUTOINYECTOR y PEN.",
      historia2: "Su fundador, Carlos Andrea Fechino, provenía de la industria farmacéutica, habiendo trabajado en la empresa de su familia, dedicada al diseño y fabricación de máquinas automáticas de empaque primario y secundario. Por su parte, su socio, Claudio Fabián Culini, está también familiarizado con el sector ya que se había dedicado a la fabricación de instrumental odontológico, en la empresa de su familia.",
      historia3: "Nacimos como una empresa dedicada a pensar, desarrollar, diseñar y fabricar EL DISPOSITIVO adecuado para cada necesidad, que ayude al paciente a lograr una correcta auto-administración de un fármaco, evitando errores en la terapia.",
      historia4: "Nuestra marca refleja nuestro objetivo: DIS+ = DISPOSITIVO",
      historia5: "Trabajamos en forma mancomunada con la industria farmacéutica y los pacientes, comprometiéndonos a ofrecer soluciones creativas e innovadoras que atiendan sus necesidades, con el único objetivo de obtener el mejor dispositivo médico, con la mayor precisión en la penetración y dosificación del fármaco.",
      vision: "Visión",
      visionTexto: "Es nuestra visión que los equipos DIS+ sean capaces de resolver plenamente las demandas de la industria farmacéutica y los pacientes, en el presente y en el futuro, desarrollando nuestros productos para mejorar la salud y el bienestar de toda la gente.",
      visionTexto2: "Preservar el medio ambiente también es nuestro objetivo, y por ello priorizamos en nuestras ideas, que todo dispositivo sea reutilizable.",
      mision: "Misión",
      misionTexto: "Ayudar a que las personas vivan en forma saludable mediante la exactitud en la dosificación del fármaco, nuestro objetivo constante, aplicando la simpleza de ideas y diseños, para hacer que el paciente o usuario, se familiarice rápidamente con nuestros dispositivos y su utilización, logrando así terapias más precisas y efectivas.",
      estrategia: "Estrategia",
      estrategiaTexto: "Tomar del universo del automatismo lo mejor o más adecuado, combinarlo con nuestras ideas y aplicarlo a la necesidad específica del paciente y su tratamiento, y así resolver de la manera más simple y efectiva, la correcta administración del fármaco, todo ello dentro de las más estrictas normas de excelencia en lo que hacemos.",
      calidad: "Calidad",
      certificada: "Certificada",
      innovacion: "Innovación",
      constante: "Constante",
    },
    en: {
      titulo: "History",
      historia1: "Founded in 2012 in the City of Buenos Aires, Argentina, DIS+ is a young company that started out with the sale of two initial projects — AUTOINYECTOR and PEN.",
      historia2: "Company founder Carlos Andrea Fechino has a background in the pharmaceutical industry, as he used to work in his family's company, which dealt with design and manufacturing of automated primary and secondary packaging machines. Company partner Claudio Fabián Culini also has expertise in this sector, since before starting DIS+ he worked at his family's firm, a dentistry equipment manufacturer.",
      historia3: "DIS+ was created with a focus on conceiving, developing, designing and manufacturing devices that are just right for every need, and that help patients self-administer drugs properly, avoiding treatment errors.",
      historia4: "Our brand is a clear reflection of our goal: DIS+ stands for “dispositivo”, a pun that brings together the Spanish term for “device” (“dispositivo”) and the Spanish word for “positive” (“positivo”).",
      historia5: "We see our work with patients and the pharma industry as a partnership. In this spirit, our commitment is to offer creative and innovative solutions that cater to our users' needs. Our sole objective is to build medical devices that are the best in the market, and stand out for drug delivery and dosing accuracy.",
      vision: "Vision",
      visionTexto: "Our vision is to enable DIS+ devices to fully cater to the present and future demands of patients and the pharma industry. This is why we develop our products with a focus on enhancing health and wellbeing for everyone.",
      visionTexto2: "Protecting the environment is yet another objective at our firm. For this reason one of our priorities is to make all our devices reusable.",
      mision: "Mission",
      misionTexto: "To help people lead a healthy life through accurate drug dosing. This is a goal that we pursue tirelessly. By using a simple approach to our ideas and designs, we enable patients and users to quickly familiarize themselves with our devices and their utilization, thus achieving more accurate and effective treatments.",
      estrategia: "Strategy",
      estrategiaTexto: "To take the best and most appropriate concepts from the field of automatic drug self-administration devices, combine them with our ideas, and apply them to specific patient needs and treatment requirements, so as to enable medications to be administered properly, simply, effectively and in accordance with our most ambitious standards of excellence.",
      calidad: "Certified",
      certificada: "Quality",
      innovacion: "Constant",
      constante: "Innovation",
    }
  }

  return (
    <section id="nosotros" className="py-8 scroll-mt-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Sección Historia */}
          <div className="space-y-8 ">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">{textos[idioma].titulo}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                {textos[idioma].historia1}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              {textos[idioma].historia2}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                {textos[idioma].historia3}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                {textos[idioma].historia4}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {textos[idioma].historia5}
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
                  <h3 className="text-2xl font-serif font-bold text-primary">{textos[idioma].vision}</h3>
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
                      {textos[idioma].visionTexto}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {textos[idioma].visionTexto2}
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
                  <h3 className="text-2xl font-serif font-bold text-primary">{textos[idioma].mision}</h3>
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
                      {textos[idioma].misionTexto}
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
                  <h3 className="text-2xl font-serif font-bold text-primary">{textos[idioma].estrategia}</h3>
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
                      {textos[idioma].estrategiaTexto}
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
                <div className="font-semibold">{textos[idioma].calidad}</div>
                <div className="text-sm text-muted-foreground">{textos[idioma].certificada}</div>
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
                <div className="font-semibold">{textos[idioma].innovacion}</div>
                <div className="text-sm text-muted-foreground">{textos[idioma].constante}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NosotrosSection