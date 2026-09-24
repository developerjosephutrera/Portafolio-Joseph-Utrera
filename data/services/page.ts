export const servicesPageData = {
    hero: {
        badge: "Mis Servicios",
        // Separamos el título en partes para mantener el efecto visual de negrita/delgado
        title: {
            part1: "Transformando Ideas ",
            part2: "en diseños intuitivos para ",
            part3: "Experiencias de Usuarios ",
            part4: "Atractivas y Funcionales"
        },
        description: {
            part1: "Con mi experiencia en diseño de aplicaciones móviles y web, transformo ideas en interfaces visualmente impactantes y fáciles de usar que cautivan y fidelizan a los usuarios.",
            part2: "Descubre mis trabajos y observa los diseños."
        }
    },

    // Sección de tarjetas
    servicesList: [
        {
            id: 1,
            title: "Frontend y experiencia de usuario",
            subtitle: "Interfaces claras, rápidas y adaptables.",
            image: "/assets/imgs/services-list/img-1.png",
            link: "/work",
            features: [
                {
                    name: "Interfaces responsivas",
                    description:
                        "Desarrollo interfaces con React, Next.js, TypeScript, Bootstrap, HTML y CSS, adaptadas para funcionar correctamente en computadoras, tablets y teléfonos.",
                },
                {
                    name: "Del diseño al código",
                    description:
                        "Convierto diseños y prototipos de Figma en páginas funcionales, cuidando la estructura, los espacios, la navegación y los detalles visuales.",
                },
                {
                    name: "Rendimiento web",
                    description:
                        "Optimizo componentes, imágenes y recursos para reducir los tiempos de carga y ofrecer una navegación más fluida.",
                },
            ],
        },

        {
            id: 2,
            title: "Backend, APIs y datos",
            subtitle: "La lógica que mantiene todo funcionando.",
            image: "/assets/imgs/services-list/img-3.png",
            link: "/work",
            features: [
                {
                    name: "Desarrollo de APIs",
                    description:
                        "Construyo APIs con Python, FastAPI, C# y .NET para conectar interfaces, servicios externos y bases de datos de manera ordenada.",
                },
                {
                    name: "Bases de datos",
                    description:
                        "Diseño y administro bases de datos como MySQL, SQLite y SQL Server, definiendo relaciones y consultas según las necesidades de cada aplicación.",
                },
                {
                    name: "Lógica de negocio",
                    description:
                        "Desarrollo las reglas y procesos que necesita cada sistema, desde controles de inventario hasta flujos de trabajo y validaciones personalizadas.",
                },
            ],
        },

        {
            id: 3,
            title: "Sitios web y WordPress",
            subtitle: "Sitios administrables y fáciles de mantener.",
            image: "/assets/imgs/services-list/img-4.png",
            link: "/work",
            features: [
                {
                    name: "WordPress y Elementor",
                    description:
                        "Creo y personalizo sitios corporativos, landing pages y páginas administrables utilizando WordPress y Elementor.",
                },
                {
                    name: "Mantenimiento y migraciones",
                    description:
                        "Realizo actualizaciones, copias de seguridad, migraciones, configuración de plugins y corrección de problemas técnicos.",
                },
                {
                    name: "SEO y analítica",
                    description:
                        "Configuro herramientas como Yoast, Rank Math, Google Search Console y Google Analytics para mejorar la indexación y medir el funcionamiento del sitio.",
                },
            ],
        },

        {
            id: 4,
            title: "Infraestructura y seguridad",
            subtitle: "De desarrollo a producción, con una base segura.",
            image: "/assets/imgs/services-list/img-5.png",
            link: "/work",
            features: [
                {
                    name: "Dominios y despliegue",
                    description:
                        "Configuro dominios, DNS, certificados SSL, hosting y despliegues en plataformas como Vercel, Render, Cloudflare y Hostinger.",
                },
                {
                    name: "Protección de aplicaciones",
                    description:
                        "Implemento autenticación con OAuth 2.0 y JWT, políticas CORS, límites de solicitudes y otras medidas para proteger aplicaciones y APIs.",
                },
                {
                    name: "Respaldo y mantenimiento",
                    description:
                        "Configuro copias de seguridad, actualizaciones y medidas preventivas para reducir fallos y facilitar la recuperación del sistema.",
                },
            ],
        },

        {
            id: 5,
            title: "Automatización e IA aplicada",
            subtitle: "Tecnología útil para resolver tareas concretas.",
            image: "/assets/imgs/services-list/img-2.png",
            link: "/work",
            features: [
                {
                    name: "Automatización de procesos",
                    description:
                        "Creo flujos con n8n y Make para conectar herramientas, mover información y reducir tareas manuales repetitivas.",
                },
                {
                    name: "Extracción de datos",
                    description:
                        "Desarrollo procesos de web scraping con Python y Beautiful Soup para obtener, organizar y utilizar información de distintas fuentes.",
                },
                {
                    name: "Visión artificial",
                    description:
                        "Trabajo con modelos como YOLO para detectar objetos, realizar seguimiento y reconocer eventos específicos dentro de videos.",
                },
            ],
        },
    ],
};