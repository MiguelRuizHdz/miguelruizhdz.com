'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

const translations: Record<Language, Record<string, string>> = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        'hero.title': 'Building Experiences:',
        'hero.subtitle': 'Web & Mobile Apps',
        'hero.description': "Software Engineer passionate about building scalable, well-designed solutions across web and mobile. I combine full-stack .NET development, API integrations and SQL engineering to improve data flow and system interoperability. I enjoy modernizing platforms, solving complex problems through clean architecture, and continuously learning new technologies.",
        'hero.cta': "Let's build something awesome",
        'hero.slide1.title': 'Architecture',
        'hero.slide1.desc': 'Scalable Solutions • Design Patterns',
        'hero.slide2.title': 'Full Stack',
        'hero.slide2.desc': 'Next.js • .NET • SQL Server',
        'hero.slide3.title': 'Mobile First',
        'hero.slide3.desc': 'Ionic • Swift • React Native',
        'services.title': 'My Services',
        'services.header_desc': 'Engineered for performance, designed for impact. I deliver full-stack solutions that scale with your business needs.',
        'services.mvp.title': 'Startup MVPs',
        'services.mvp.desc': 'Rapid development of scalable minimum viable products to get your idea to market quickly.',
        'services.dotnet.title': '.NET Architecture',
        'services.dotnet.desc': 'High-performance backend solutions and system migrations using clean architecture.',
        'services.mobile.title': 'Mobile Solutions',
        'services.mobile.desc': 'Feature-rich iOS and Android apps using Ionic, Swift, and React Native.',
        'projects.title': 'Featured Projects',
        'projects.mcd.title': 'My Debtor Clients (MCD)',
        'projects.mcd.desc': 'Mobile app for small businesses to track customer debts and payments.',
        'projects.tienda.title': 'Gift Shop App',
        'projects.tienda.desc': 'Full-stack e-commerce web platform built with Angular, Ionic, and Firebase.',
        'projects.websocket.title': 'Real-time WebSocket Server',
        'projects.websocket.desc': 'High-performance C# server for real-time data synchronization.',
        'projects.portfolio.title': 'Modern Professional Portfolio',
        'projects.portfolio.desc': 'A high-impact personal brand website built with Next.js, featuring real-time bilingual support and high-performance design.',
        'experience.title': 'Professional Journey',
        'experience.siemens.role': 'Software Engineer | Solutions Architect @ Siemens',
        'experience.siemens.date': 'Jun 2022 - Present',
        'experience.siemens.desc': 'I specialize in full-stack web development with C# and .NET, database design with SQL Server, and project management with SCRUM/Azure DevOps. I design and optimize advanced software solutions, maintain robust APIs, and contribute to ERP/MES systems. Stack: ASP.NET MVC, Blazor, Entity Framework, Vue.JS, JQuery, SQL Server.',
        'experience.intern.role': 'Software Engineering Intern @ Siemens',
        'experience.intern.date': 'Jun 2022 - Dec 2022',
        'experience.intern.desc': 'Full-stack development with C#. Designed and managed databases, migrated critical websites, and developed dynamic dashboards and handheld applications. Focused on engineering support and system interoperability.',
        'experience.fime.role': 'C# Blazor Developer @ FIME-UANL',
        'experience.fime.date': 'Dec 2021 - May 2022',
        'experience.fime.desc': 'Developed web applications using Blazor WebAssembly and SQL Server, focusing on high-performance academic and administrative tools.',
        'education.title': 'Education',
        'education.master': "Master's in DevOps & Software Ops (UNIR)",
        'education.ing': 'BS in Systems Administration Engineering (UANL)',
        'education.ing.desc': 'Aug 2018 – Dec 2022. Expertise in .NET, Angular, Ionic, Swift, and PHP. Includes an iOS Mobile App Development diploma (Figma, Swift, Firebase).',
        'courses.title': 'Certifications & Continuous Learning',
        'courses.softskills': 'Soft Skills & Leadership Development Certificate (Tec de Monterrey)',
        'courses.leadership': 'Leadership Bootcamp for Developers (Codigo Facilito)',
        'courses.architecture_learning': 'Software Architecture: From Developer to Architect (LinkedIn)',
        'courses.management': 'Technology & Engineering Management (Udemy)',
        'courses.solid': 'SOLID Principles in C# and .NET (Platzi)',
        'courses.patterns': 'Design Patterns in C# & ASP.NET (Udemy)',
        'courses.nest': 'NestJS: Scalable Backend Development (Udemy)',
        'courses.generative_ai': 'What Is Generative AI? (LinkedIn Learning)',
        'courses.scrum': 'Advanced Scrum & Project Management (LinkedIn)',
        'trust.title': 'Trusted By & Collaborations',
        'contact.title': "Let's Build Your Vision",
        'contact.subtitle': "I combine engineering precision with creative design. Ready to launch your next project?",
        'footer.copy': '© {year} Miguel Angel Ruiz Hernández. All rights reserved.',
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.projects': 'Proyectos',
        'nav.services': 'Servicios',
        'nav.contact': 'Contacto',
        'hero.title': 'Construyendo Experiencias:',
        'hero.subtitle': 'Apps Web y Móvil',
        'hero.description': "Ingeniero de Software apasionado por construir soluciones escalables y bien diseñadas para web y móvil. Combino el desarrollo Full Stack en .NET, integraciones de API e ingeniería SQL para mejorar el flujo de datos y la interoperabilidad del sistema. Disfruto modernizando plataformas, resolviendo problemas complejos mediante arquitectura limpia y aprendiendo continuamente nuevas tecnologías.",
        'hero.cta': 'Construyamos algo increíble',
        'hero.slide1.title': 'Arquitectura',
        'hero.slide1.desc': 'Soluciones Escalables • Patrones de Diseño',
        'hero.slide2.title': 'Full Stack',
        'hero.slide2.desc': 'Next.js • .NET • SQL Server',
        'hero.slide3.title': 'Mobile First',
        'hero.slide3.desc': 'Ionic • Swift • React Native',
        'services.title': 'Mis Servicios',
        'services.header_desc': 'Ingeniería para el rendimiento, diseño para el impacto. Entrego soluciones full-stack que escalan con las necesidades de tu negocio.',
        'services.mvp.title': 'MVPs para Startups',
        'services.mvp.desc': 'Desarrollo rápido de productos mínimos viables escalables para lanzar tu idea al mercado.',
        'services.dotnet.title': 'Arquitectura .NET',
        'services.dotnet.desc': 'Soluciones backend de alto rendimiento y migraciones de sistemas usando Clean Architecture.',
        'services.mobile.title': 'Soluciones Móviles',
        'services.mobile.desc': 'Apps robustas para iOS y Android usando Ionic, Swift y React Native.',
        'projects.title': 'Proyectos Destacados',
        'projects.mcd.title': 'Mis Clientes Deudores (MCD)',
        'projects.mcd.desc': 'App móvil para negocios que ayuda a llevar el registro de pagos y deudas.',
        'projects.tienda.title': 'Tienda de Regalos',
        'projects.tienda.desc': 'Plataforma web de e-commerce desarrollada con Angular, Ionic y Firebase.',
        'projects.websocket.title': 'Servidor WebSocket Real-time',
        'projects.websocket.desc': 'Servidor C# de alto rendimiento para sincronización de datos en tiempo real.',
        'projects.portfolio.title': 'Portafolio Profesional Moderno',
        'projects.portfolio.desc': 'Un sitio web de marca personal de alto impacto construido con Next.js, con soporte bilingüe en tiempo real y diseño de alto rendimiento.',
        'experience.title': 'Trayectoria Profesional',
        'experience.siemens.role': 'Software Engineer | Solutions Architect @ Siemens',
        'experience.siemens.date': 'Jun 2022 - Presente',
        'experience.siemens.desc': 'Me especializo en desarrollo Full-stack con C# y .NET, diseño de bases de datos con SQL Server y gestión de proyectos con SCRUM/Azure DevOps. Diseño y optimizo soluciones de software avanzadas, mantengo APIs robustas y contribuyo a sistemas ERP/MES. Stack: ASP.NET MVC, Blazor, Entity Framework, Vue.JS, JQuery, SQL Server.',
        'experience.intern.role': 'Ingeniero de Software (Intern) @ Siemens',
        'experience.intern.date': 'Jun 2022 - Dic 2022',
        'experience.intern.desc': 'Desarrollo Full-stack con C#. Diseño y administración de bases de datos, migración de sitios críticos y creación de tableros dinámicos. Enfocado en soporte de ingeniería e interoperabilidad de sistemas.',
        'experience.fime.role': 'Desarrollador C# Blazor @ FIME-UANL',
        'experience.fime.date': 'Dic 2021 - May 2022',
        'experience.fime.desc': 'Desarrollo de aplicaciones web con Blazor WebAssembly y SQL Server, enfocado en herramientas académicas y administrativas de alto rendimiento.',
        'education.title': 'Educación',
        'education.master': 'Maestría en DevOps y Operaciones de Software (UNIR)',
        'education.ing': 'Ingeniería Administrador de Sistemas (UANL)',
        'education.ing.desc': 'Ago 2018 – Dic 2022. Experiencia en .NET, Angular, Ionic, Swift y PHP. Incluye diplomado en Desarrollo de Apps iOS (Figma, Swift, Firebase).',
        'courses.title': 'Certificaciones y Aprendizaje Continuo',
        'courses.softskills': 'Certificado de Competencias Desarrollo de Soft Skills Personales, Sociales y de Liderazgo (Tec de Monterrey)',
        'courses.leadership': 'Bootcamp de Liderazgo para Devs (Codigo Facilito)',
        'courses.architecture_learning': 'Arquitectura de Software: De Desarrollador a Arquitecto (LinkedIn)',
        'courses.management': 'Liderazgo: Gerencia en Tecnología / Ingeniería (Udemy)',
        'courses.solid': 'Principios SOLID en C# y .NET (Platzi)',
        'courses.patterns': 'Patrones de Diseño en C# & ASP.NET (Udemy)',
        'courses.nest': 'NestJS: Desarrollo Backend Escalable (Udemy)',
        'courses.generative_ai': '¿Qué es la IA Generativa? (LinkedIn Learning)',
        'courses.scrum': 'Scrum Avanzado y Gestión de Proyectos (LinkedIn)',
        'trust.title': 'Colaboraciones y Trayectoria',
        'contact.title': 'Hagamos Realidad tu Visión',
        'contact.subtitle': 'Combino la precisión de la ingeniería con un diseño creativo. ¿Listo para lanzar tu próximo proyecto?',
        'footer.copy': '© {year} Miguel Angel Ruiz Hernández. Todos los derechos reservados.',
    }
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    lang: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('es');

    const lang = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, lang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
