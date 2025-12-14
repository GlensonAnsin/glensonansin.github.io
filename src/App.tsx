import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';
import { TextHoverEffect } from './components/ui/text-hover-effect';
import { EncryptedText } from './components/ui/encrypted-text';
import { ReactLenis, useLenis } from 'lenis/react';

function App() {
  useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  return (
    <main className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
      <ReactLenis root />
      <section id="hero" className="h-screen">
        <BackgroundBeamsWithCollision>
          <div>
            <TextHoverEffect text="GLENSON ANSIN" />
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">Full-Stack Developer</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                  <span className="">Full-Stack Developer</span>
                </div>
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

      <section id="about" className="h-screen"></section>

      <section id="education" className="h-screen"></section>

      <section id="tech-stack" className="h-screen"></section>

      <section id="experience" className="h-screen"></section>

      <section id="projects " className="h-screen"></section>

      <section id="contact" className="h-screen"></section>
    </main>
  );
}

export default App;
