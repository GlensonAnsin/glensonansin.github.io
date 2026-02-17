import { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ui/scroll-progress';
import { ReactLenis } from 'lenis/react';
import { AnimatedGradientText } from './components/ui/animated-gradient-text';
import { AuroraText } from './components/ui/aurora-text';
import { CometCard } from './components/ui/comet-card';
import { personalInfo } from './data/personal-information';
import { CardSpotlight } from './components/ui/card-spotlight';
import { PinContainer } from './components/ui/3d-pin';
import { Mail, Linkedin, Facebook, Download, ArrowRight, MapPin, GraduationCap, ExternalLink, Heart, Menu, X, Sparkles, Github } from 'lucide-react';
import { LinkPreview } from './components/ui/link-preview';
import { Particles } from './components/ui/particles';
import { SmoothCursor } from './components/ui/smooth-cursor';
import { EncryptedText } from './components/ui/encrypted-text';
import { ScrollReveal } from './components/ui/scroll-reveal';

function App() {


  const getIconUrl = (icon: string) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`;

  const languagesIcons = personalInfo.technicalSkills.languages.map(({ name, icon }) => ({ name, icon: getIconUrl(icon) }));
  const frontendIcons = personalInfo.technicalSkills.frontend.map(({ name, icon }) => ({ name, icon: getIconUrl(icon) }));
  const backendIcons = personalInfo.technicalSkills.backend.map(({ name, icon }) => ({ name, icon: getIconUrl(icon) }));
  const mobileIcons = personalInfo.technicalSkills.mobile.map(({ name, icon }) => ({ name, icon: getIconUrl(icon) }));
  const databaseIcons = personalInfo.technicalSkills.database.map(({ name, icon }) => ({ name, icon: getIconUrl(icon) }));
  const toolsIcons = personalInfo.technicalSkills.tools.map(({ name, icon }) => ({ name, icon: getIconUrl(icon) }));

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = ['about', 'tech-stack', 'projects', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#tech-stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <main className="bg-neutral-950">
      <ReactLenis root />
      <ScrollProgress className="top-[0]" />

      <nav
        className={`fixed top-4 left-4 md:left-1/2 z-100 transition-all duration-500 ${
          scrolled
            ? 'opacity-100 translate-y-0 md:-translate-x-1/2'
            : 'opacity-0 -translate-y-4 md:-translate-x-1/2 pointer-events-none'
        }`}
      >
        <div className="px-2 py-2 rounded-2xl border border-indigo-500/20 bg-indigo-950/70 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.1)]">
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white bg-indigo-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-indigo-400" />
                )}
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-2 rounded-2xl border border-indigo-500/20 bg-indigo-950/90 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.1)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-white bg-indigo-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <Particles className="fixed inset-0 z-0 pointer-events-none" quantity={100} ease={80} color="#ffffff" refresh />
      <SmoothCursor />

      <section className="h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-indigo-950/30">
        <div className="mx-[5%] flex flex-col items-center">
          <div className="mb-6 relative inline-flex items-center gap-2 px-5 py-2 rounded-full overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-indigo-500/30 animate-[spin_4s_linear_infinite] blur-sm" />
            <span className="absolute inset-[1px] rounded-full bg-indigo-500/30 backdrop-blur-sm" />
            <Sparkles size={14} className="relative text-indigo-300" />
            <span className="relative text-sm text-slate-300 font-medium">Open to Opportunities</span>
          </div>
          <h1 className="text-3xl relative z-20 sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center text-white tracking-tight">
            <AnimatedGradientText>Glenson Ansin</AnimatedGradientText>
          </h1>
          <h2 className="mt-3 text-xl relative z-20 sm:text-2xl md:text-3xl lg:text-5xl text-center">
            <EncryptedText
              text="Software Developer"
              encryptedClassName="text-neutral-500"
              revealedClassName="text-slate-100"
              revealDelayMs={50}
            />
          </h2>
          <p className="mt-6 max-w-xl text-center text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Specializing in creating both web and mobile applications. Driven by a simple mission: to take the most
            ambitious ideas and develop them into existence.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <a
              href="/Ansin_Glenson_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.45)] transition-all duration-300"
            >
              <Download size={18} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
              Download CV
            </a>
            <a
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl border border-indigo-500/40 text-slate-200 font-medium hover:bg-indigo-500/15 hover:border-indigo-400/60 transition-all duration-300"
            >
              Hire Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-indigo-950/60 pb-15">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <ScrollReveal>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tighter text-center pt-10">
              <AuroraText>About Me</AuroraText>
            </h3>
            <p className="mt-4 text-center text-slate-400 max-w-lg mx-auto">Get to know the person behind the code.</p>
          </ScrollReveal>
          <div className="mt-12 flex flex-col xl:flex-row items-center justify-center xl:gap-16">
            <ScrollReveal direction="right" delay={0.2}>
              <CometCard>
                <div className="w-64 mb-10 xl:mb-0 rounded-2xl overflow-hidden border border-indigo-500/30 bg-indigo-950/80 shadow-[0_0_40px_rgba(99,102,241,0.1)]">
                  <div className="p-3">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                      <img
                        loading="lazy"
                        height="1000"
                        width="1000"
                        className="w-full h-full object-cover"
                        alt={personalInfo.name}
                        src={personalInfo.photo.formalPic}
                      />
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-1 text-center">
                    <p className="text-slate-100 font-semibold text-sm">{personalInfo.name}</p>
                    <p className="text-indigo-300 text-xs mt-0.5">Software Developer</p>
                  </div>
                </div>
              </CometCard>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <CardSpotlight className="self-center bg-indigo-950/80 border border-indigo-500/20 max-w-2xl">
                <h4 className="text-slate-100 text-xl md:text-2xl lg:text-3xl font-bold mb-4 relative z-20">
                  Who I Am
                </h4>
                <div className="flex flex-wrap gap-3 mb-6 relative z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
                    <MapPin size={12} />
                    {personalInfo.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
                    <GraduationCap size={12} />
                    {personalInfo.university}
                  </span>
                </div>
                <p className="text-slate-300 relative z-20 mb-5 leading-relaxed">{personalInfo.about.paragraph1}</p>
                <div className="w-16 h-px bg-indigo-500/30 mb-5 relative z-20"></div>
                <p className="text-slate-300 relative z-20 leading-relaxed">{personalInfo.about.paragraph2}</p>
              </CardSpotlight>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="bg-indigo-950/30 pb-15">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <ScrollReveal>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tighter text-center pt-10">
              <AuroraText>Technical Skills</AuroraText>
            </h3>
            <p className="mt-4 text-center text-slate-400 max-w-lg mx-auto">
              The technologies and tools I work with to bring ideas to life.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Programming Languages', items: languagesIcons },
                { title: 'Frontend Development', items: frontendIcons },
                { title: 'Backend Development', items: backendIcons },
                { title: 'Mobile Development', items: mobileIcons },
                { title: 'Database', items: databaseIcons },
                { title: 'Tools', items: toolsIcons },
              ].map((category) => (
                <div
                  key={category.title}
                  className="rounded-2xl border border-indigo-500/20 bg-indigo-950/40 backdrop-blur-sm p-6"
                >
                  <h4 className="text-lg font-semibold text-indigo-300 mb-5 tracking-wide">{category.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map(({ name, icon }, index) => (
                      <div
                        key={index}
                        className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-indigo-500/10 bg-white/5 backdrop-blur-sm hover:bg-indigo-500/15 hover:border-indigo-400/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300 cursor-default"
                      >
                        <img
                          src={icon}
                          alt={name}
                          className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="projects" className="bg-indigo-950/60 pb-20">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <ScrollReveal>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tighter text-center pt-10">
              <AuroraText>Projects</AuroraText>
            </h3>
            <p className="mt-4 text-center text-slate-400 max-w-lg mx-auto">
              A collection of projects that showcase my skills and passion for building impactful software.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 w-fit place-self-center">
              {personalInfo.projects.map((p) => (
                <PinContainer title={p.link} href={p.link} key={p.projectName}>
                  <div className="flex flex-col tracking-tight w-[75vw] sm:w-[80vw] max-w-[18rem] h-[16rem] sm:h-[18rem] rounded-xl overflow-hidden border border-indigo-500/20 bg-indigo-950/60">
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={Object.values(p.img)[0] as string}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt={p.projectName}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/60 to-transparent" />
                    </div>
                    <div className="relative px-5 pb-5 -mt-10 z-10">
                      <h4 className="font-bold text-lg sm:text-xl text-white mb-1">{p.projectName}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">{p.description}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-indigo-300 font-medium group-hover:text-indigo-200 transition-colors">
                        <ExternalLink size={12} />
                        <span>View Project</span>
                      </div>
                    </div>
                  </div>
                </PinContainer>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact" className="bg-indigo-950/30 pb-20">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <ScrollReveal>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tighter text-center pt-10">
              <AuroraText>Contact Me</AuroraText>
            </h3>
            <p className="mt-4 text-center text-slate-400 max-w-lg mx-auto">
              Have a project in mind or just want to connect? Feel free to reach out through any of these platforms.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group rounded-2xl border border-indigo-500/20 bg-indigo-950/40 backdrop-blur-sm p-6 hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 flex items-center justify-center mb-4 group-hover:bg-indigo-500/25 transition-colors duration-300">
                  <Mail size={22} className="text-indigo-400" />
                </div>
                <p className="text-lg font-semibold text-slate-100 mb-1">Email</p>
                <p className="text-xs text-slate-500 mb-3">Drop me a message anytime</p>
                <LinkPreview
                  url="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  className="inline-flex items-center gap-1.5 text-sm text-indigo-300 hover:text-indigo-200 transition-colors"
                >
                  ansin.glenson01@gmail.com
                  <ExternalLink size={12} />
                </LinkPreview>
              </div>

              <div className="group rounded-2xl border border-indigo-500/20 bg-indigo-950/40 backdrop-blur-sm p-6 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-4 group-hover:bg-blue-500/25 transition-colors duration-300">
                  <Linkedin size={22} className="text-blue-400" />
                </div>
                <p className="text-lg font-semibold text-slate-100 mb-1">LinkedIn</p>
                <p className="text-xs text-slate-500 mb-3">Let's connect professionally</p>
                <LinkPreview
                  url="https://linkedin.com/in/glenson-ansin-8862752b3/"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-300 hover:text-blue-200 transition-colors"
                >
                  Glenson Ansin
                  <ExternalLink size={12} />
                </LinkPreview>
              </div>

              <div className="group rounded-2xl border border-indigo-500/20 bg-indigo-950/40 backdrop-blur-sm p-6 hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-sky-500/15 flex items-center justify-center mb-4 group-hover:bg-sky-500/25 transition-colors duration-300">
                  <Facebook size={22} className="text-sky-400" />
                </div>
                <p className="text-lg font-semibold text-slate-100 mb-1">Facebook</p>
                <p className="text-xs text-slate-500 mb-3">Follow me on social media</p>
                <LinkPreview
                  url="https://www.facebook.com/glenson.ansin"
                  className="inline-flex items-center gap-1.5 text-sm text-sky-300 hover:text-sky-200 transition-colors"
                >
                  Glenson Ansin
                  <ExternalLink size={12} />
                </LinkPreview>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="relative border-t border-indigo-500/20 bg-indigo-950/80 backdrop-blur-sm">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-indigo-500/10 flex items-center justify-center hover:bg-indigo-500/15 hover:border-indigo-400/30 transition-all duration-300"
            >
              <Mail size={16} className="text-slate-400" />
            </a>
            <a
              href="https://linkedin.com/in/glenson-ansin-8862752b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-indigo-500/10 flex items-center justify-center hover:bg-blue-500/15 hover:border-blue-400/30 transition-all duration-300"
            >
              <Linkedin size={16} className="text-slate-400" />
            </a>
            <a
              href="https://www.facebook.com/glenson.ansin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-indigo-500/10 flex items-center justify-center hover:bg-sky-500/15 hover:border-sky-400/30 transition-all duration-300"
            >
              <Facebook size={16} className="text-slate-400" />
            </a>
            <a
              href="https://github.com/glensonansin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-indigo-500/10 flex items-center justify-center hover:bg-sky-500/15 hover:border-sky-400/30 transition-all duration-300"
            >
              <Github size={16} className="text-slate-400" />
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Built with</span>
            <div className="flex items-center gap-1.5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
                className="w-4 h-4 hover:scale-125 transition-transform duration-300"
                title="React"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                alt="Vite"
                className="w-4 h-4 hover:scale-125 transition-transform duration-300"
                title="Vite"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="Tailwind CSS"
                className="w-4 h-4 hover:scale-125 transition-transform duration-300"
                title="Tailwind CSS"
              />
            </div>
            <span>and</span>
            <Heart size={14} className="text-red-400 fill-red-400 animate-pulse" />
          </div>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Glenson Ansin. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
