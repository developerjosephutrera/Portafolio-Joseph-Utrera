import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portafolio-joseph-utrera.vercel.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, // Máxima prioridad para tu raíz
    },
    // Si en el futuro creas páginas independientes (ej. /proyectos o /servicios), 
    // debes agregar un nuevo objeto aquí con prioridad 0.8
  ]
}