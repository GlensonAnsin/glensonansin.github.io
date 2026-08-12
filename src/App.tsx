import { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import {
  Mail,
  Linkedin,
  Facebook,
  Download,
  ArrowRight,
  MapPin,
  GraduationCap,
  ExternalLink,
  Terminal,
} from 'lucide-react';

import { ScrollProgress } from './components/ui/scroll-progress';
import { ScrollReveal } from './components/ui/scroll-reveal';
import { CardSpotlight } from './components/ui/card-spotlight';
import { PinContainer } from './components/ui/3d-pin';
import { LinkPreview } from './components/ui/link-preview';
import { EncryptedText } from './components/ui/encrypted-text';
import { AIChatbot } from './components/ui/ai-chatbot';
import { TypingCode, type CodeLine } from './components/ui/typing-code';
import { NavBar } from './components/nav-bar';
import { StatusBar } from './components/status-bar';
import { SectionHeader } from './components/section-header';
import { personalInfo } from './data/personal-information';

const heroCode: CodeLine[] = [
  [
    { text: 'const ', tone: 'keyword' },
    { text: 'developer', tone: 'type' },
    { text: ' = {' },
  ],
  [
    { text: '  name', tone: 'type' },
    { text: ': ' },
    { text: '"Glenson Ansin"', tone: 'string' },
    { text: ',' },
  ],
  [
    { text: '  role', tone: 'type' },
    { text: ': ' },
    { text: '"Full-Stack Developer"', tone: 'string' },
    { text: ',' },
  ],
  [
    { text: '  location', tone: 'type' },
    { text: ': ' },
    { text: '"Cagayan de Oro, PH"', tone: 'string' },
    { text: ',' },
  ],
  [
    { text: '  stack', tone: 'type' },
    { text: ': [' },
    { text: '"React"', tone: 'string' },
    { text: ', ' },
    { text: '"Node.js"', tone: 'string' },
    { text: ', ' },
    { text: '"Express"', tone: 'string' },
    { text: ', ' },
    { text: '"TypeScript"', tone: 'string' },
    { text: ', ' },
    { text: '"Python"', tone: 'string' },
    { text: ', ' },
    { text: '"Laravel"', tone: 'string' },
    { text: ', ' },
    { text: '"Flutter"', tone: 'string' },
    { text: '],' },
  ],
  [
    { text: '  status', tone: 'type' },
    { text: ': ' },
    { text: '"open to opportunities"', tone: 'string' },
    { text: ',' },
  ],
  [{ text: '};' }],
];

const categoryTones = ['keyword', 'type', 'string', 'function', 'number'] as const;

const toneTextClass: Record<(typeof categoryTones)[number], string> = {
  keyword: 'text-accent-keyword',
  type: 'text-accent-type',
  string: 'text-accent-string',
  function: 'text-accent-function',
  number: 'text-accent-number',
};

function App() {
  const getIconUrl = (icon: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`;

  const skillCategories = [
    { key: 'languages', title: 'languages', items: personalInfo.technicalSkills.languages },
    { key: 'frontend', title: 'frontend', items: personalInfo.technicalSkills.frontend },
    { key: 'backend', title: 'backend', items: personalInfo.technicalSkills.backend },
    { key: 'mobile', title: 'mobile', items: personalInfo.technicalSkills.mobile },
    { key: 'database', title: 'database', items: personalInfo.technicalSkills.database },
    { key: 'tools', title: 'tools', items: personalInfo.technicalSkills.tools },
  ];

  const [heroTyped, setHeroTyped] = useState(false);

  return (
    <main className="bg-bg text-fg min-h-screen">
      <ReactLenis root />
      <ScrollProgress />

      {/* Ambient blueprint grid, sits behind all content */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 z-0 pointer-events-none w-[60rem] h-[40rem] rounded-full bg-accent-type/[0.06] blur-[120px]" />

      <NavBar />
      <AIChatbot />

      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section id="home" className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-4 pt-24 pb-16">
        <div className="w-full max-w-2xl flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface font-mono text-xs text-fg-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-string opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-string" />
            </span>
            open to opportunities
          </div>

          <div className="w-full rounded-xl border border-border bg-surface shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-bg-elevated">
              <Terminal size={13} className="text-fg-subtle" />
              <span className="font-mono text-xs text-fg-muted">hero.ts</span>
            </div>
            <div className="px-5 py-5 sm:px-6 sm:py-6 overflow-x-auto">
              <TypingCode lines={heroCode} onDone={() => setHeroTyped(true)} />
            </div>
          </div>

          <div className="mt-5 min-h-[1.5em] font-mono text-xs sm:text-sm text-fg-subtle text-center px-2">
            {heroTyped && (
              <EncryptedText
                text="// turning ambitious ideas into software that ships."
                encryptedClassName="text-fg-subtle/50"
                revealedClassName="text-fg-subtle"
                revealDelayMs={12}
              />
            )}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 flex-col sm:flex-row w-full sm:w-auto">
            <a
              href="/Ansin_Glenson_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-accent-type text-bg font-mono text-sm font-medium shadow-[0_0_30px_rgba(92,179,255,0.25)] hover:shadow-[0_0_40px_rgba(92,179,255,0.4)] hover:opacity-95 transition-all duration-300"
            >
              <Download size={16} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
              download resume
            </a>
            <a
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg border border-border text-fg font-mono text-sm font-medium hover:bg-surface-hover hover:border-border-strong transition-all duration-300"
            >
              get in touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* About                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section id="about" className="relative z-10 pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader title="About Me" description="Get to know the person behind the code." />

          <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            <ScrollReveal delay={0.15} direction="right">
              <div className="group w-60 shrink-0 rounded-xl overflow-hidden border border-border bg-surface shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-bg-elevated font-mono text-[11px] text-fg-subtle">
                  <span>Ansin_Glenson.jpg</span>
                </div>
                <div className="p-3">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                    <img
                      loading="lazy"
                      height="1000"
                      width="1000"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={personalInfo.name}
                      src={personalInfo.photo.ghostAvatar}
                    />
                  </div>
                </div>
                <div className="px-4 pb-4 pt-1 text-center">
                  <p className="text-fg font-semibold text-sm">{personalInfo.name}</p>
                  <p className="text-accent-type text-xs mt-0.5 font-mono">Full-Stack Developer</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25} direction="left">
              <CardSpotlight className="self-center bg-surface border border-border max-w-2xl rounded-xl">
                <h4 className="text-fg text-xl md:text-2xl font-bold mb-4 relative z-20 font-mono">
                  <span className="text-fg-subtle">// </span>who I am
                </h4>
                <div className="flex flex-wrap gap-2.5 mb-6 relative z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-inset border border-border text-fg-muted text-xs font-mono">
                    <MapPin size={12} className="text-accent-type" />
                    {personalInfo.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-inset border border-border text-fg-muted text-xs font-mono">
                    <GraduationCap size={12} className="text-accent-function" />
                    {personalInfo.university}
                  </span>
                </div>
                <p className="text-fg-muted relative z-20 mb-5 leading-relaxed">{personalInfo.about.paragraph1}</p>
                <div className="w-16 h-px bg-border-strong mb-5 relative z-20"></div>
                <p className="text-fg-muted relative z-20 leading-relaxed">{personalInfo.about.paragraph2}</p>
              </CardSpotlight>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Tech Stack                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section id="tech-stack" className="relative z-10 pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader title="Technical Skills" description="The technologies and tools I work with to bring ideas to life." />

          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, catIndex) => {
                const tone = categoryTones[catIndex % categoryTones.length];
                return (
                  <div key={category.key} className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                    <h4 className="font-mono text-sm mb-4">
                      <span className="text-fg-subtle">{'{ '}</span>
                      <span className={toneTextClass[tone]}>&quot;{category.title}&quot;</span>
                      <span className="text-fg-subtle">: [</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map(({ name, icon }) => (
                        <div
                          key={name}
                          className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-bg-inset hover:border-border-strong hover:bg-surface-hover transition-all duration-300 cursor-default"
                        >
                          <img
                            src={getIconUrl(icon)}
                            alt=""
                            className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                          />
                          <span className={`font-mono text-xs ${toneTextClass[tone]}`}>&quot;{name}&quot;</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 font-mono text-sm text-fg-subtle">]{'}'}</p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Projects                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section id="projects" className="relative z-10 pb-24 sm:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader
            title="Projects"
            description="A collection of projects that showcase my skills and passion for building systems and applications."
          />

          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 place-items-center">
              {personalInfo.projects.map((p) => (
                <PinContainer title={p.link} href={p.link} key={p.projectName}>
                  <div className="flex flex-col tracking-tight w-[75vw] sm:w-[80vw] max-w-[18rem] h-[16rem] sm:h-[18rem] rounded-xl overflow-hidden border border-border bg-bg-elevated">
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={Object.values(p.img)[0] as string}
                        className="absolute inset-0 w-full h-full object-cover"
                        alt={p.projectName}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/60 to-transparent" />
                    </div>
                    <div className="relative px-5 pb-5 -mt-10 z-10">
                      <h4 className="font-bold text-lg sm:text-xl text-fg mb-1">{p.projectName}</h4>
                      <p className="text-xs sm:text-sm text-fg-muted leading-relaxed line-clamp-2">{p.description}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent-type">
                        <ExternalLink size={12} />
                        <span>view_project()</span>
                      </div>
                    </div>
                  </div>
                </PinContainer>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Contact                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section id="contact" className="relative z-10 pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader
            title="Contact Me"
            description="Have a project in mind or just want to connect? Feel free to reach out through any of these platforms."
          />

          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
              <div className="group rounded-xl border border-border bg-surface p-6 hover:border-border-strong hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-accent-type/10 border border-accent-type/20 flex items-center justify-center mb-4 group-hover:bg-accent-type/15 transition-colors duration-300">
                  <Mail size={20} className="text-accent-type" />
                </div>
                <p className="text-base font-semibold text-fg mb-1 font-mono">email</p>
                <p className="text-xs text-fg-subtle mb-3">Drop me a message anytime</p>
                <LinkPreview
                  url="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  className="inline-flex items-center gap-1.5 text-sm text-accent-type hover:opacity-80 transition-opacity font-mono"
                >
                  ansin.glenson01@gmail.com
                  <ExternalLink size={12} />
                </LinkPreview>
              </div>

              <div className="group rounded-xl border border-border bg-surface p-6 hover:border-border-strong hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-accent-function/10 border border-accent-function/20 flex items-center justify-center mb-4 group-hover:bg-accent-function/15 transition-colors duration-300">
                  <Linkedin size={20} className="text-accent-function" />
                </div>
                <p className="text-base font-semibold text-fg mb-1 font-mono">linkedin</p>
                <p className="text-xs text-fg-subtle mb-3">Let&apos;s connect professionally</p>
                <LinkPreview
                  url="https://linkedin.com/in/glenson-ansin-8862752b3/"
                  className="inline-flex items-center gap-1.5 text-sm text-accent-function hover:opacity-80 transition-opacity font-mono"
                >
                  Glenson Ansin
                  <ExternalLink size={12} />
                </LinkPreview>
              </div>

              <div className="group rounded-xl border border-border bg-surface p-6 hover:border-border-strong hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-accent-string/10 border border-accent-string/20 flex items-center justify-center mb-4 group-hover:bg-accent-string/15 transition-colors duration-300">
                  <Facebook size={20} className="text-accent-string" />
                </div>
                <p className="text-base font-semibold text-fg mb-1 font-mono">facebook</p>
                <p className="text-xs text-fg-subtle mb-3">Follow me on social media</p>
                <LinkPreview
                  url="https://www.facebook.com/glenson.ansin"
                  className="inline-flex items-center gap-1.5 text-sm text-accent-string hover:opacity-80 transition-opacity font-mono"
                >
                  Glenson Ansin
                  <ExternalLink size={12} />
                </LinkPreview>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="relative z-10">
        <StatusBar />
      </div>
    </main>
  );
}

export default App;
