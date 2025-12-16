import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';
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
import { AnimatedThemeToggler } from './components/ui/animated-theme-toggler';
import { CardBody, CardContainer, CardItem } from './components/ui/3d-card';
import cocLogo from './assets/images/coc-logo.png';
import ustpLogo from './assets/images/ustp-logo.png';
import { IconCloud } from './components/ui/icon-cloud';
import { ShineBorder } from './components/ui/shine-border';
import { PinContainer } from './components/ui/3d-pin';

function App() {
  useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  const icon = personalInfo.techStack.map((icon) => `https://cdn.simpleicons.org/${icon}/${icon}`);

  return (
    <main className="bg-white dark:bg-neutral-950">
      <ReactLenis root />
      <ScrollProgress className="top-[0]" />
      <AnimatedThemeToggler className="fixed top-5 right-5 z-50 text-black dark:text-white" />

      <section id="hero" className="h-screen">
        <BackgroundBeamsWithCollision>
          <div>
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
        </BackgroundBeamsWithCollision>
      </section>

      <section id="about" className="mx-[15%]">
        <h3 className='className="text-2xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center mt-10'>
          <AuroraText>About Me</AuroraText>
        </h3>
        <div className="mt-10 flex item-center justify-center gap-20">
          <CometCard className="w-fit">
            <button
              type="button"
              className="my-10 bg-gray-50 dark:bg-black flex w-80 items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
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
                    alt="Invite background"
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

          <CardSpotlight className="h-fit self-center bg-gray-50 dark:bg-black">
            <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
            <p className="text-neutral-600 dark:text-white text-lg md:text-xl lg:text-3xl font-bold mb-10 relative z-20">
              {personalInfo.name}
            </p>
            <p className="text-neutral-600 dark:text-white relative z-20 mb-10">{personalInfo.about.paragraph1}</p>
            <p className="text-neutral-600 dark:text-white relative z-20">{personalInfo.about.paragraph2}</p>
          </CardSpotlight>
        </div>
      </section>

      <section id="education" className="mx-[15%]">
        <h3 className='className="text-2xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center mt-10'>
          <AuroraText>Education</AuroraText>
        </h3>
        <div className="mt-10 flex item-center justify-center gap-20">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-150 h-50 rounded-xl p-6 border grid grid-cols-2 gap-5">
              <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
              <CardItem translateZ="100">
                <img
                  src={cocLogo}
                  height="1000"
                  width="1000"
                  className="w-full object-cover rounded-xl group-hover/card:shadow-xl shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div>
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  PHINMA - Cagayan de Oro College
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Humanities and Social Sciences
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  2020 - 2022
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-150 h-50 rounded-xl p-6 border grid grid-cols-2 gap-5">
              <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
              <CardItem translateZ="100">
                <img
                  src={ustpLogo}
                  height="1000"
                  width="1000"
                  className="w-full object-cover rounded-xl group-hover/card:shadow-xl shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div>
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  University of Science and Technology of Southern Philippines
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Bachelor of Science in Information Technology
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  2022 - 2026
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      <section id="tech-stack" className="mx-[15%]">
        <h3 className='className="text-2xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center mt-10'>
          <AuroraText>Tech Stack</AuroraText>
        </h3>
        <div className="mt-10">
          <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloud images={icon} />
          </div>
        </div>
      </section>

      <section id="experience" className="mx-[15%]">
        <h3 className='className="text-2xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center mt-10'>
          <AuroraText>Relevant Experience</AuroraText>
        </h3>
        <div className="mt-10 ">
          {personalInfo.experience.map((exp) => (
            <div className="mx-[15%] bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border">
              <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
              <p className="text-neutral-600 dark:text-white text-lg md:text-xl lg:text-3xl font-bold mb-5">
                {exp.duration}
              </p>
              <p className="text-xl font-bold text-neutral-600 dark:text-white">{exp.appName}</p>
              <p className="text-xl font-bold text-neutral-600 dark:text-white">{exp.company}</p>
              <p className="text-xl font-bold text-neutral-600 dark:text-white">{exp.role}</p>
              <p className="text-xl font-bold text-neutral-600 dark:text-white">{exp.techStack.join(', ')}</p>
              <p className="text-black dark:text-white mt-5">{exp.shortDescription}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects " className="mx-[15%]">
        <h3 className='className="text-2xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center mt-10'>
          <AuroraText>Projects</AuroraText>
        </h3>
        <div className="mt-10 flex item-center justify-center">
          {personalInfo.projects.map((p) => (
            <PinContainer title={p.link} href={p.link}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-neutral-600 dark:text-slate-100">
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
      </section>

      <section id="contact" className="h-screen mx-[15%]"></section>
    </main>
  );
}

export default App;
