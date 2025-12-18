import { TextHoverEffect } from './components/ui/text-hover-effect';
import { EncryptedText } from './components/ui/encrypted-text';
import { ScrollProgress } from './components/ui/scroll-progress';
import { ReactLenis, useLenis } from 'lenis/react';
import { AnimatedGradientText } from './components/ui/animated-gradient-text';
import { AuroraText } from './components/ui/aurora-text';
import { CometCard } from './components/ui/comet-card';
import formalPic from './assets/images/formal-pic.jpg';
import { personalInfo } from './data/personal-information';
import { CardSpotlight } from './components/ui/card-spotlight';
import { CardBody, CardContainer, CardItem } from './components/ui/3d-card';
import cocLogo from './assets/images/coc-logo.png';
import ustpLogo from './assets/images/ustp-logo.png';
import { IconCloud } from './components/ui/icon-cloud';
import { ShineBorder } from './components/ui/shine-border';
import { PinContainer } from './components/ui/3d-pin';
import { Mail, Linkedin, Facebook } from 'lucide-react';
import { LinkPreview } from './components/ui/link-preview';
import { Particles } from './components/ui/particles';
import { SmoothCursor } from './components/ui/smooth-cursor';

function App() {
  useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  const icon = personalInfo.techStack.map((icon) => `https://cdn.simpleicons.org/${icon}/${icon}`);

  return (
    <main className="bg-neutral-950">
      <ReactLenis root />
      <ScrollProgress className="top-[0]" />
      <Particles className="fixed inset-0 z-0 pointer-events-none" quantity={100} ease={80} color="#ffffff" refresh />
      <SmoothCursor />

      <section className="h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-indigo-950/30">
        <div className="flex flex-col items-center justify-center w-full">
          <TextHoverEffect text="GLENSON ANSIN" />
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <AnimatedGradientText>Full-Stack Developer</AnimatedGradientText>
            </div>
            <br />
            <EncryptedText
              text="specializing in React and Express.js"
              encryptedClassName="text-neutral-500"
              revealedClassName="dark:text-white text-black"
              revealDelayMs={50}
            />
          </h2>
        </div>
      </section>

      <section id="about" className="bg-indigo-950/60">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <h3 className="text-5xl font-bold tracking-tighter text-center pt-10">
            <AuroraText>About Me</AuroraText>
          </h3>
          <div className="mt-10 flex flex-col xl:flex-row items-center justify-center xl:gap-20">
            <CometCard className="w-fit">
              <button
                type="button"
                className="my-10 bg-gray-50 dark:bg-indigo-950 flex w-80 items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'none',
                  opacity: 1,
                }}
              >
                <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                      alt="image"
                      src={formalPic}
                      style={{
                        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 6px 0px',
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
              </button>
            </CometCard>

            <CardSpotlight className="self-center bg-gray-50 dark:bg-indigo-950">
              <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
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
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-indigo-950 dark:border-white/[0.2] border-black/[0.1] w-fit md:w-[50%] lg:w-fit h-full rounded-xl p-6 border md:grid md:grid-cols-2 md:gap-5">
                <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
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
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-indigo-950 dark:border-white/[0.2] border-black/[0.1] w-fit md:w-[50%] lg:w-fit h-full rounded-xl p-6 border md:grid md:grid-cols-2 md:gap-5">
                <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
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

      <section id="tech-stack" className="bg-indigo-950/60">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]"></div>
        <h3 className="text-5xl font-bold tracking-tighter text-center pt-10">
          <AuroraText>Tech Stack</AuroraText>
        </h3>
        <div className="mt-10">
          <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloud images={icon} />
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
              <div className="w-fit xl:w-200 place-self-center bg-gray-50 relative group/card shadow-xl dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-indigo-950 dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border">
                <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
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

      <section id="projects " className="bg-indigo-950/60 pb-20">
        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
          <h3 className="text-5xl font-bold tracking-tighter text-center pt-10">
            <AuroraText>Projects</AuroraText>
          </h3>
          <div className="mt-10 flex flex-col gap-15 lg:flex-row lg:item-center lg:justify-center">
            {personalInfo.projects.map((p) => (
              <PinContainer title={p.link} href={p.link} className="w-fit">
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-neutral-600 dark:text-slate-100">
                    {p.projectName}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 dark:text-neutral-300">{p.description}</span>
                  </div>
                  <div className="relative flex-1 mt-4">
                    <img
                      src={p.img.ghostlyGamersImg || p.img.autoAiderImg}
                      className="absolute w-full h-full rounded-lg"
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
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Glenson Ansin</p>
        </aside>
      </footer>
    </main>
  );
}

export default App;
