// filepath: src/components/NovedadesSection.jsx
import React from 'react';

const novedadesData = {
  es: [
    {
      id: 1,
      titulo: 'Guía de Uso: Autoinyector 1ml',
      descripcion: 'Aprende a utilizar nuestro autoinyector de 1ml de forma segura y eficaz con esta guía paso a paso.',
      videoId: 'dQw4w9WgXcQ', // Reemplazar con ID de video real
      categoria: 'Instructivo'
    },
    {
      id: 2,
      titulo: 'Nuevas Características del Pen Reutilizable',
      descripcion: 'Descubre las últimas actualizaciones y mejoras en nuestro Pen Reutilizable de 1.5/3ml.',
      videoId: 'dQw4w9WgXcQ', // Reemplazar con ID de video real
      categoria: 'Actualización'
    },
    {
      id: 3,
      titulo: 'Mantenimiento de Dispositivos',
      descripcion: 'Consejos y mejores prácticas para el mantenimiento de nuestros dispositivos para asegurar su longevidad.',
      videoId: 'dQw4w9WgXcQ', // Reemplazar con ID de video real
      categoria: 'Guía'
    }
  ],
  en: [
    {
      id: 1,
      titulo: 'User Guide: 1ml Autoinjector',
      descripcion: 'Learn how to use our 1ml autoinjector safely and effectively with this step-by-step guide.',
      videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
      categoria: 'Instructional'
    },
    {
      id: 2,
      titulo: 'New Features of the Reusable Pen',
      descripcion: 'Discover the latest updates and improvements to our 1.5/3ml Reusable Pen.',
      videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
      categoria: 'Update'
    },
    {
      id: 3,
      titulo: 'Device Maintenance',
      descripcion: 'Tips and best practices for maintaining our devices to ensure their longevity.',
      videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
      categoria: 'Guide'
    }
  ]
};

const NovedadesSection = ({ idioma }) => {
  const textos = {
    es: {
      titulo: 'Novedades e Instructivos',
      subtitulo: 'Mantente al día con las últimas actualizaciones, guías de uso y tutoriales en video para nuestros dispositivos.'
    },
    en: {
      titulo: 'News and Instructions',
      subtitulo: 'Stay up to date with the latest updates, user guides, and video tutorials for our devices.'
    }
  };

  const novedades = novedadesData[idioma];

  return (
    <section id="novedades" className="py-16 bg-background scroll-mt-16">
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
      </div>
    </section>
  );
};

export default NovedadesSection;