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

function App() {
  useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  return (
    <main className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
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

      <section id="about" className="h-screen mx-[15%]">
        <h3 className='className="text-2xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center mt-10'>
          <AuroraText>About Me</AuroraText>
        </h3>
        <div className="flex item-center justify-center gap-20 mt-10">
          <CometCard className="w-fit">
            <button
              type="button"
              className="my-10 flex w-80 items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'none',
                opacity: 1,
              }}
            >
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
          <CardSpotlight className="h-fit self-center">
            <p className="text-black dark:text-white text-lg md:text-xl lg:text-3xl font-bold mb-10 relative z-20">
              {personalInfo.name}
            </p>
            <p className="text-black dark:text-white relative z-20 mb-10">{personalInfo.about.paragraph1}</p>
            <p className="text-black dark:text-white  relative z-20">{personalInfo.about.paragraph2}</p>
          </CardSpotlight>
        </div>
      </section>

      <section id="education" className="h-screen mx-[15%]"></section>

      <section id="tech-stack" className="h-screen mx-[15%]"></section>

      <section id="experience" className="h-screen mx-[15%]"></section>

      <section id="projects " className="h-screen mx-[15%]"></section>

      <section id="contact" className="h-screen mx-[15%]"></section>
    </main>
  );
}

export default App;
