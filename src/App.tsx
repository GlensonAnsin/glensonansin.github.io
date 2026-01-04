import { ScrollProgress } from './components/ui/scroll-progress';
import { ReactLenis, useLenis } from 'lenis/react';
import { AnimatedGradientText } from './components/ui/animated-gradient-text';
import { AuroraText } from './components/ui/aurora-text';
import { CometCard } from './components/ui/comet-card';
import { personalInfo } from './data/personal-information';
import { CardSpotlight } from './components/ui/card-spotlight';
import { CardBody, CardContainer, CardItem } from './components/ui/3d-card';
import cocLogo from './assets/images/coc-logo.png';
import ustpLogo from './assets/images/ustp-logo.png';
import { PinContainer } from './components/ui/3d-pin';
import { Mail, Linkedin, Facebook } from 'lucide-react';
import { LinkPreview } from './components/ui/link-preview';
import { Particles } from './components/ui/particles';
import { SmoothCursor } from './components/ui/smooth-cursor';
import { EncryptedText } from './components/ui/encrypted-text';

function App() {
  useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  const icons = personalInfo.techStack.map((icon) => `https://cdn.simpleicons.org/${icon}/${icon}`);

  return (
    <main className="bg-neutral-950">
      <ReactLenis root />
      <ScrollProgress className="top-[0]" />
      <Particles className="fixed inset-0 z-0 pointer-events-none" quantity={100} ease={80} color="#ffffff" refresh />
      <SmoothCursor />

      <section className="h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-indigo-950/30">
        <div className="mx-[5%]">
          <h1 className="text-5xl relative z-20 md:text-5xl lg:text-8xl font-bold text-center text-black dark:text-white tracking-tight">
            <AnimatedGradientText>Glenson Ansin</AnimatedGradientText>
          </h1>
          <h2 className="text-3xl relative z-20 md:text-3xl lg:text-6xl text-center">
            <EncryptedText
              text="Software Developer"
              encryptedClassName="text-neutral-500"
              revealedClassName="text-slate-100"
              revealDelayMs={50}
            />
          </h2>
          <p className="mt-5 max-w-150 place-self-center text-center">
            I specialize in building full-stack robust React applications and streamlining complex workflows with
            Python. Let's turn your abstract ideas into user-friendly realities.
          </p>
          <div className="mt-5 flex items-center justify-center gap-5 flex-col sm:flex-row">
            <button className="w-full sm:w-41">
              <a
                href="/Ansin_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-indigo-950 text-slate-100 border-1 border-indigo-500/50 shadow-lg hover:bg-indigo-900 transition-colors p-2 rounded-lg"
              >
                <i className="uil uil-import"></i>Download CV
              </a>
            </button>
            <button className="w-full sm:w-41">
              <a
                href="#contact"
                className="flex items-center justify-center text-slate-100 border-1 border-indigo-500/50 shadow-lg hover:bg-indigo-900 transition-colors p-2 rounded-lg"
              >
                Hire Me
              </a>
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="bg-indigo-950/60 pb-15">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <h3 className="text-5xl font-bold tracking-tighter text-center pt-10">
            <AuroraText>About Me</AuroraText>
          </h3>
          <div className="mt-10 flex flex-col xl:flex-row items-center justify-center xl:gap-20">
            <CometCard>
              <div
                className="bg-gray-50 w-60 mb-10 xl:mb-0 dark:bg-indigo-950 rounded-[16px] p-4 border-1 border-indigo-500/50"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'none',
                  opacity: 1,
                }}
              >
                <div className="flex-1">
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      height="1000"
                      width="1000"
                      className="w-fit h-fit rounded-[16px] bg-[#000000]"
                      alt="image"
                      src={personalInfo.photo.formalPic}
                      style={{
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 6px 0px',
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
              </div>
            </CometCard>

            <CardSpotlight className="self-center bg-gray-50 dark:bg-indigo-950 border-1 border-indigo-500/50">
              <p className="text-neutral-600 dark:text-slate-100 text-lg md:text-xl lg:text-3xl font-bold mb-10 relative z-20">
                {personalInfo.name}
              </p>
              <p className="text-slate-500 dark:text-neutral-300 relative z-20 mb-10">
                {personalInfo.about.paragraph1}
              </p>
              <p className="text-slate-500 dark:text-neutral-300 relative z-20">{personalInfo.about.paragraph2}</p>
            </CardSpotlight>
          </div>
        </div>
      </section>

      <section id="education" className="bg-indigo-950/30">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <h3 className="text-5xl font-bold tracking-tighter text-center pt-10">
            <AuroraText>Education</AuroraText>
          </h3>
          <div className="mt-10 flex flex-col lg:flex-row lg:item-center lg:justify-center lg:gap-20">
            <CardContainer className="inter-var h-full shadow-xl">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-indigo-950 border-1 border-indigo-500/50 w-fit md:w-[50%] lg:w-fit h-full rounded-xl p-6 border md:grid md:grid-cols-2 md:gap-5">
                <CardItem translateZ="100">
                  <img
                    src={cocLogo}
                    height="1000"
                    width="1000"
                    className="w-full xl:h-full object-cover rounded-xl group-hover/card:shadow-xl shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="mt-5 md:mt-0">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-slate-100">
                    PHINMA - Cagayan de Oro College
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-slate-500 max-w-sm mt-2 dark:text-neutral-300">
                    Humanities and Social Sciences
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-slate-500 max-w-sm mt-2 dark:text-neutral-300">
                    2020 - 2022
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            <CardContainer className="inter-var h-full shadow-xl">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-indigo-950 border-1 border-indigo-500/50 w-fit md:w-[50%] lg:w-fit h-full rounded-xl p-6 border md:grid md:grid-cols-2 md:gap-5">
                <CardItem translateZ="100">
                  <img
                    src={ustpLogo}
                    height="1000"
                    width="1000"
                    className="w-full xl:h-full object-cover rounded-xl group-hover/card:shadow-xl shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="mt-5 md:mt-0">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-slate-100">
                    University of Science and Technology of Southern Philippines
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-slate-500 max-w-sm mt-2 dark:text-neutral-300">
                    Bachelor of Science in Information Technology
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-slate-500 max-w-sm mt-2 dark:text-neutral-300">
                    2022 - 2026
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="bg-indigo-950/60 pb-15">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <h3 className="text-5xl font-bold tracking-tighter text-center pt-10">
            <AuroraText>Tech Stack</AuroraText>
          </h3>
          <div className="mt-10 flex items-center justify-center flex-wrap gap-10">
            {icons.map((icon, index) => (
              <img key={index} src={icon} alt="icon" className="w-20 h-20" />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-indigo-950/30 pb-15">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <h3 className="text-5xl font-bold tracking-tighter text-center pt-10">
            <AuroraText>Relevant Experience</AuroraText>
          </h3>
          <div className="mt-10">
            {personalInfo.experience.map((exp) => (
              <div className="w-fit xl:w-200 place-self-center bg-gray-50 relative group/card shadow-xl dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-indigo-950 border-1 border-indigo-500/50 rounded-xl p-6 border">
                <p className="text-neutral-600 dark:text-slate-100 text-2xl font-bold mb-5">{exp.duration}</p>
                <p className="text-lg text-slate-500 dark:text-neutral-300">{exp.appName}</p>
                <p className="text-lg text-slate-500 dark:text-neutral-300">{exp.company}</p>
                <p className="text-lg text-slate-500 dark:text-neutral-300">{exp.role}</p>
                <p className="text-lg text-slate-500 dark:text-neutral-300">{exp.techStack.join(', ')}</p>
                <p className="text-slate-500 dark:text-neutral-300 mt-5">{exp.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-indigo-950/60 pb-20">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <h3 className="text-5xl font-bold tracking-tighter text-center pt-10">
            <AuroraText>Projects</AuroraText>
          </h3>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-20 w-fit place-self-center">
            {personalInfo.projects.map((p) => (
              <PinContainer title={p.link} href={p.link} key={p.projectName}>
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[80vw] max-w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-neutral-600 dark:text-slate-100">
                    {p.projectName}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 dark:text-neutral-300 line-clamp-2">{p.description}</span>
                  </div>
                  <div className="relative flex-1 mt-4 overflow-hidden rounded-lg">
                    <img
                      src={p.img.ghostlyGamersImg || p.img.autoAiderImg}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
              </PinContainer>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-indigo-950/30 pb-20">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <h3 className="text-5xl font-bold tracking-tighter text-center pt-10">
            <AuroraText>Contact Me</AuroraText>
          </h3>
          <div className="mt-10 flex flex-col place-self-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-20">
            <div className="flex gap-5">
              <Mail size={50} className="text-neutral-600 dark:text-slate-100" />
              <div>
                <p className="text-xl font-bold text-neutral-600 dark:text-slate-100">Email</p>
                <LinkPreview
                  url="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  className="text-slate-500 max-w-sm mt-2 dark:text-neutral-300"
                >
                  ansin.glenson01@gmail.com
                </LinkPreview>
              </div>
            </div>

            <div className="flex gap-5">
              <Linkedin size={50} className="text-neutral-600 dark:text-slate-100" />
              <div>
                <p className="text-xl font-bold text-neutral-600 dark:text-slate-100">LinkedIn</p>
                <LinkPreview
                  url="https://linkedin.com/in/glenson-ansin-8862752b3/"
                  className="text-slate-500 max-w-sm mt-2 dark:text-neutral-300"
                >
                  Glenson Ansin
                </LinkPreview>
              </div>
            </div>

            <div className="flex gap-5">
              <Facebook size={50} className="text-neutral-600 dark:text-slate-100" />
              <div>
                <p className="text-xl font-bold text-neutral-600 dark:text-slate-100">Facebook</p>
                <LinkPreview
                  url="https://www.facebook.com/glenson.ansin"
                  className="text-slate-500 max-w-sm mt-2 dark:text-neutral-300"
                >
                  Glenson Ansin
                </LinkPreview>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer sm:footer-horizontal footer-center text-lg p-4 border-t-1 border-slate-500/20 bg-indigo-950">
        <aside>
          <p>© {new Date().getFullYear()} Glenson Ansin. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            <span>Built with</span>
            <img src="https://cdn.simpleicons.org/react/react" alt="React" className="w-5 h-5" title="React" />
            <img src="https://cdn.simpleicons.org/vite/vite" alt="Vite" className="w-5 h-5" title="Vite" />
            <img
              src="https://cdn.simpleicons.org/tailwindcss/tailwindcss"
              alt="Tailwind CSS"
              className="w-5 h-5"
              title="Tailwind CSS"
            />
          </div>
        </aside>
      </footer>
    </main>
  );
}

export default App;
