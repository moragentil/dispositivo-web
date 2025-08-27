import React from 'react'

const EquipoSection = ({idioma}) => {

const textos = {
  es:{
    titulo: "Sumate al Equipo",
    descripcion: "Buscamos profesionales apasionados por la innovación médica y el desarrollo de dispositivos que mejoren la vida de los pacientes.",
    subtitulo: "Únete a Dis+ Medical Devices",
    texto1: "Forma parte de un equipo que está transformando la industria de dispositivos médicos",
    subtitulo2: "Lo que ofrecemos:",
    lista1Items: [
      "Ambiente de trabajo innovador",
      "Proyectos desafiantes",
      "Crecimiento profesional",
      "Impacto en la salud global"
    ],
    pregunta: "¿Interesado en formar parte de nuestro equipo?",
    envianos: "Envíanos tu CV para trabajar con nosotros al siguiente email:",
  },
  en:{
    titulo: "Join our Team",
    descripcion: "We are looking for professionals passionate about medical innovation and the development of devices that improve patient lives.",
    subtitulo: "Join Dis+ Medical Devices",
    texto1: "Be part of a team that is transforming the medical device industry",
    subtitulo2: "What we offer:",
    lista1Items: [
      "Innovative work environment",
      "Challenging projects",
      "Professional growth",
      "Impact on global health"
    ],
    pregunta: "Interested in joining our team?",
    envianos: "Send us your CV to work with us at the following email:",
  }
}

  return (
    <section id="equipo" className="py-12 bg-muted/30 scroll-mt-6">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 sm:mb-6">{textos[idioma].titulo}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-8">
            {textos[idioma].descripcion}
          </p>

          <div className="bg-white rounded-lg shadow text-left p-6 sm:p-8">
            <div className="mb-6">
              <div className="font-serif text-xl font-bold mb-2">{textos[idioma].subtitulo}</div>
              <div className="text-muted-foreground mb-4">
                {textos[idioma].texto1}
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">{textos[idioma].subtitulo2}</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {textos[idioma].lista1Items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="bg-accent/10 p-4 rounded-lg">
                <p className="text-sm mb-2">
                  <strong>{textos[idioma].pregunta}</strong>
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {textos[idioma].envianos}
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