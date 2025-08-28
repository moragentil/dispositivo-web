// filepath: src/components/NovedadesSection.jsx
import React from 'react';
import { Download } from 'lucide-react';

const novedadesData = {
  es: [
    {
      id: 1,
      titulo: 'Instructivo: DIS+ Descartable',
      descripcion: 'Guía completa sobre cómo utilizar el dispositivo DIS+ Descartable de forma segura y efectiva.',
      videoId: 'K9p08cCAfo0',
      categoria: 'Instructivo'
    },
    {
      id: 2,
      titulo: 'Instructivo: DIS JET',
      descripcion: 'Aprende a usar el inyector sin aguja DIS JET con este tutorial detallado.',
      videoId: 'bhZymp9C9dg',
      categoria: 'Instructivo'
    },
    {
      id: 3,
      titulo: 'Instructivo: DIS+ Reutilizable',
      descripcion: 'Descubre cómo operar y mantener tu dispositivo DIS+ Reutilizable para un rendimiento óptimo.',
      videoId: 'SMA244pyuXo',
      categoria: 'Instructivo'
    }
  ],
  en: [
    {
      id: 1,
      titulo: 'Instructional: DIS+ Disposable',
      descripcion: 'A complete guide on how to use the DIS+ Disposable device safely and effectively.',
      videoId: 'K9p08cCAfo0',
      categoria: 'Instructional'
    },
    {
      id: 2,
      titulo: 'Instructional: DIS JET',
      descripcion: 'Learn how to use the DIS JET needle-free injector with this detailed tutorial.',
      videoId: 'bhZymp9C9dg',
      categoria: 'Instructional'
    },
    {
      id: 3,
      titulo: 'Instructional: DIS+ Reusable',
      descripcion: 'Discover how to operate and maintain your DIS+ Reusable device for optimal performance.',
      videoId: 'SMA244pyuXo',
      categoria: 'Instructional'
    }
  ]
};

const guiasData = {
  es: [
    { id: 'autoinyector', nombre: 'Guía Autoinyector 1ml', pdf: '/archivos/Autoinyector-esp.pdf' },
    { id: 'pen', nombre: 'Guía Pen Reutilizable', pdf: '/archivos/Pen-esp.pdf' }
  ],
  en: [
    { id: 'autoinyector', nombre: 'Guide Autoinjector 1ml', pdf: '/archivos/Autoinyector-esp.pdf' },
    { id: 'pen', nombre: 'Guide Reusable Pen', pdf: '/archivos/Pen-esp.pdf' }
  ]
};

const NovedadesSection = ({ idioma }) => {
  const textos = {
    es: {
      titulo: 'Novedades e Instructivos',
      subtitulo: 'Mantente al día con las últimas actualizaciones, guías de uso y tutoriales en video para nuestros dispositivos.',
      tituloGuias: 'Guías de Uso para Descargar'
    },
    en: {
      titulo: 'News and Instructions',
      subtitulo: 'Stay up to date with the latest updates, user guides, and video tutorials for our devices.',
      tituloGuias: 'User Guides for Download'
    }
  };

  const novedades = novedadesData[idioma];
  const guias = guiasData[idioma];

  return (
    <section id="novedades" className="py-16 bg-background scroll-mt-3">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-foreground">{textos[idioma].titulo}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto">
            {textos[idioma].subtitulo}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {novedades.map((novedad) => (
            <div key={novedad.id} className="bg-white border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${novedad.videoId}`}
                  title={novedad.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs font-semibold text-primary uppercase mb-1">{novedad.categoria}</p>
                <h3 className="text-lg font-serif font-bold mb-2 text-foreground">{novedad.titulo}</h3>
                <p className="text-muted-foreground text-sm">
                  {novedad.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">{textos[idioma].tituloGuias}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {guias.map((guia) => (
              <a
                key={guia.id}
                href={guia.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 border border-primary text-primary bg-white hover:bg-primary/10 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>{guia.nombre}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NovedadesSection;