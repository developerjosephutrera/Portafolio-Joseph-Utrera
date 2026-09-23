import type { MetadataRoute } from "next";

const BASE_URL = "https://portafolio-joseph-utrera.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
    },
    // Si en el futuro creas páginas independientes (ej. /proyectos o /servicios), 
    // debes agregar un nuevo objeto aquí con prioridad 0.8
  ];
}