'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, Layout, Smartphone, Code2, Cpu, ExternalLink, Calendar, Send, GraduationCap, ChevronRight, ChevronLeft, Award } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

export default function Home() {
  const { lang, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(() => [
    { id: 1, icon: Cpu },
    { id: 2, icon: Code2 },
    { id: 3, icon: Smartphone }
  ], []);

  // Simple and stable auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    { id: 'mcd', icon: Smartphone, repo: 'mcd-app-ionic', github: 'https://github.com/MiguelRuizHdz/mcd-app-ionic', demo: null, tags: ['Ionic', 'TypeScript', 'Firebase'] },
    { id: 'tienda', icon: Layout, repo: 'tienda-regalos-app', github: 'https://github.com/MiguelRuizHdz/tienda-regalos-app', demo: 'https://tienda-regalos-app.vercel.app', tags: ['Angular', 'Ionic', 'Firebase'] },
    { id: 'websocket', icon: Code2, repo: 'websocket-server-service-csharp', github: 'https://github.com/MiguelRuizHdz/websocket-server-service-csharp', demo: null, tags: ['C#', '.NET', 'WebSockets'] },
  ];

  const skills = [
    { category: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'Swift', 'C++', 'PHP', 'SQL', 'VB.NET', 'SCSS'] },
    { category: 'Frameworks', items: ['Next.js', 'Angular', 'Ionic', 'React Native', 'NestJS', '.NET (Core/Framework)', 'ASP.NET MVC', 'Blazor', 'Entity Framework', 'Vue.js', 'Firebase'] },
    { category: 'Tools / Cloud', items: ['Azure DevOps', 'GCP', 'Docker', 'SQL Server', 'Git', 'Figma', 'Mendix', 'PowerApps', 'Power Automate', 'SharePoint', 'MS Project', 'Photoshop'] },
    { category: 'Strengths', items: ['Leadership', 'Software Architecture', 'Scrum', 'DevOps', 'Generative AI', 'Problem Solving'] },
  ];

  const experienceItems = [
    { id: 'siemens', icon: Cpu },
    { id: 'intern', icon: Layout },
    { id: 'fime', icon: Code2 },
  ];

  const Logo = () => (
    <div className="text-2xl font-black tracking-tighter flex items-center select-none no-animate">
      <span className="text-white">Miguel</span>
      <span className="text-blue-500">Ruiz</span>
      <span className="text-rose-500">Hdz</span>
    </div>
  );

  return (
    <main className="relative min-h-screen selection:bg-blue-500/30">
      {/* Navbar - Simplified to prevent any flickering */}
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ${scrolled ? 'bg-[#0a0a0b]/95 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
              <a href="#services" className="hover:text-white transition-colors">{lang('nav.services')}</a>
              <a href="#projects" className="hover:text-white transition-colors">{lang('nav.projects')}</a>
              <a href="#experience" className="hover:text-white transition-colors">{lang('nav.about')}</a>
              <a href="#contact" className="hover:text-white transition-colors">{lang('nav.contact')}</a>
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-2 text-xs font-black bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all active:scale-95"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left transition-opacity duration-1000">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 border border-blue-500/20">
              Software Engineer & Solutions Architect
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tighter">
              {lang('hero.title')}<br />
              <span className="text-gradient">{lang('hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              {lang('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-3 group text-lg px-10 py-5">
                <Mail className="w-5 h-5" />
                {lang('hero.cta')}
              </a>
              <div className="flex items-center gap-4 justify-center">
                <a href="https://github.com/MiguelRuizHdz" target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/miguelruizhdz/" target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                  <Linkedin className="w-6 h-6 text-blue-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Carousel Visual - Static Layout with Fading Content for maximum stability */}
          <div className="relative h-[500px] flex items-center justify-center w-full max-w-[420px] mx-auto">
            <div className="absolute inset-0 bg-blue-600/15 rounded-full blur-[100px] transform scale-75" />

            <div className="relative glass-card p-16 rounded-[48px] border-white/10 aspect-square flex flex-col items-center justify-center text-center w-full shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] bg-[#0f0f11]/60 backdrop-blur-3xl overflow-hidden z-10">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-blue-500/20 p-10 rounded-[40px] mb-10 ring-1 ring-blue-500/30">
                    {(() => {
                      const Icon = slides[currentSlide].icon;
                      return <Icon className="w-20 h-20 text-blue-400" />;
                    })()}
                  </div>
                  <h3 className="text-4xl font-black mb-4 tracking-tight">{lang(`hero.slide${currentSlide + 1}.title`)}</h3>
                  <p className="text-slate-400 text-xl font-light">{lang(`hero.slide${currentSlide + 1}.desc`)}</p>
                </motion.div>
              </AnimatePresence>

              {/* Dots - Moved slightly lower */}
              <div className="absolute bottom-6 flex gap-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-10 bg-blue-500' : 'w-3 bg-white/10'}`}
                  />
                ))}
              </div>

              {/* Controls */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-4 z-20 p-4 rounded-full bg-black/40 border border-white/10 hover:bg-blue-600/20 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-4 z-20 p-4 rounded-full bg-black/40 border border-white/10 hover:bg-blue-600/20 transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos Bar */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-center text-base font-black uppercase tracking-wider text-slate-500 mb-12">
            {lang('trust.title')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-50 grayscale hover:grayscale-0 transition-all duration-1000">
            <img src="/logos/siemens.png" alt="Siemens" className="h-7 md:h-10 w-auto object-contain hover:scale-110 transition-transform cursor-pointer" />
            <img src="/logos/uanl.png" alt="UANL" className="h-10 md:h-14 w-auto object-contain hover:scale-110 transition-transform cursor-pointer" />
            <img src="/logos/itesm.png" alt="Tec de Monterrey" className="h-10 md:h-14 w-auto object-contain hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12 text-center md:text-left">
            <div>
              <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter">{lang('services.title')}</h2>
              <div className="h-2 w-32 bg-blue-600 rounded-full mx-auto md:mx-0" />
            </div>
            <p className="text-slate-400 max-w-lg text-xl font-light leading-relaxed">
              {lang('services.header_desc')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { id: 'mvp', icon: Layout },
              { id: 'dotnet', icon: Code2 },
              { id: 'mobile', icon: Smartphone }
            ].map((service) => (
              <div
                key={service.id}
                className="glass-card p-12 rounded-[40px] group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.04] border-white/5 active:scale-[0.98]"
              >
                <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-all duration-700 shadow-xl group-hover:shadow-blue-500/30">
                  <service.icon className="w-10 h-10 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-black mb-6">{lang(`services.${service.id}.title`)}</h3>
                <p className="text-slate-400 leading-relaxed font-light text-xl">
                  {lang(`services.${service.id}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-4xl font-black mb-20 flex items-center gap-6">
              <Calendar className="w-10 h-10 text-blue-500" />
              {lang('experience.title')}
            </h2>
            <div className="space-y-20 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-white/10 to-transparent" />
              {experienceItems.map((item) => (
                <div key={item.id} className="relative pl-16 group">
                  <div className="absolute left-0 top-1 w-10 h-10 bg-[#0a0a0b] border-2 border-white/20 rounded-xl flex items-center justify-center group-hover:border-blue-500 transition-all z-10 shadow-lg group-hover:shadow-blue-500/20">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-black mb-2 group-hover:text-blue-400 transition-colors tracking-tight">{lang(`experience.${item.id}.role`)}</h3>
                  <p className="text-blue-500 font-bold text-sm mb-6 flex items-center gap-3">
                    <span className="w-4 h-0.5 bg-blue-500" />
                    {lang(`experience.${item.id}.date`)}
                  </p>
                  <p className="text-slate-400 font-light leading-relaxed text-lg">
                    {lang(`experience.${item.id}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-24">
            <div>
              <h2 className="text-4xl font-black mb-16 flex items-center gap-6">
                <GraduationCap className="w-10 h-10 text-blue-500" />
                {lang('education.title')}
              </h2>
              <div className="space-y-8">
                <div className="p-10 rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all backdrop-blur-sm group">
                  <h3 className="text-2xl font-black mb-3 text-white group-hover:text-blue-400 transition-colors">{lang('education.master')}</h3>
                  <p className="text-slate-400 text-lg uppercase tracking-wider font-bold text-xs opacity-60">UNIR | Internacional de La Rioja</p>
                </div>
                <div className="p-10 rounded-[32px] bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all backdrop-blur-sm group">
                  <h3 className="text-2xl font-black mb-3 text-white group-hover:text-blue-400 transition-colors">{lang('education.ing')}</h3>
                  <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-4">UANL | FIME</p>
                  <p className="text-slate-400 text-lg font-light leading-relaxed">
                    {lang('education.ing.desc')}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-black mb-16 flex items-center gap-6">
                <Award className="w-10 h-10 text-blue-500" />
                {lang('courses.title')}
              </h2>
              <div className="grid gap-4">
                {[
                  'softskills', 'leadership', 'architecture_learning', 'management', 'solid', 'patterns', 'nest', 'generative_ai', 'scrum'
                ].map((course) => (
                  <div key={course} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group">
                    <div className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-500 transition-colors" />
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{lang(`courses.${course}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-black mb-16 flex items-center gap-6">
                <Code2 className="w-10 h-10 text-blue-500" />
                Stack
              </h2>
              <div className="grid gap-14">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-base font-black uppercase tracking-wider text-blue-500 mb-8 border-l-4 border-blue-600 pl-4">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-4">
                      {skillGroup.items.map(skill => (
                        <span key={skill} className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-blue-500/10 hover:border-blue-500/60 transition-all cursor-default shadow-lg">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-40 px-6 relative bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto relative">
          {/* Subtle Background Text */}
          <div className="absolute left-0 right-0 -top-12 select-none pointer-events-none text-center">
            <span className="text-[100px] lg:text-[140px] font-black uppercase tracking-tighter text-white opacity-[0.03]">
              Solutions
            </span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-24 text-center tracking-tighter relative z-10">{lang('projects.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-[48px] overflow-hidden group border-white/5 shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="h-72 bg-gradient-to-br from-blue-600/20 to-indigo-900/60 flex items-center justify-center p-16 relative">
                  <project.icon className="w-24 h-24 text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div className="p-12">
                  <div className="flex items-center gap-3 mb-4 opacity-50">
                    <Github className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{project.repo}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-5">{lang(`projects.${project.id}.title`)}</h3>
                  <p className="text-slate-400 text-xl font-light mb-10 leading-relaxed">
                    {lang(`projects.${project.id}.desc`)}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20"
                      >
                        Live Demo <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all"
                    >
                      Source Code <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto glass-card p-12 lg:p-16 rounded-[48px] text-center relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(59,130,246,0.2)] border-white/10">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-rose-600/5 rounded-full blur-[100px]" />

          <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter">{lang('contact.title')}</h2>
          <p className="text-lg text-slate-400 mb-12 font-light">{lang('contact.subtitle')}</p>

          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:miguelruizhdz@gmail.com"
              className="flex items-center justify-center gap-4 p-6 rounded-3xl bg-blue-600 text-white text-lg font-black hover:bg-blue-500 transition-all hover:scale-[1.03] shadow-2xl shadow-blue-500/30 active:scale-95"
            >
              <Send className="w-6 h-6" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/miguelruizhdz/"
              target="_blank"
              className="flex items-center justify-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 text-lg font-black hover:bg-white/10 transition-all hover:scale-[1.03] active:scale-95"
            >
              <Linkedin className="w-6 h-6 text-blue-500" />
              LinkedIn
            </a>
          </div>

          <p className="mt-12 text-slate-300 font-black tracking-[0.4em] uppercase text-xs opacity-90">
            Monterrey • Nuevo León • México 🇲🇽
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-[#050506]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16">
          <Logo />
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
            {lang('footer.copy').replace('{year}', new Date().getFullYear().toString())}
          </p>
          <div className="flex gap-10">
            <a href="https://github.com/MiguelRuizHdz" target="_blank" className="text-slate-400 hover:text-white transition-all transform hover:scale-125">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/miguelruizhdz/" target="_blank" className="text-slate-400 hover:text-blue-500 transition-all transform hover:scale-125">
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
