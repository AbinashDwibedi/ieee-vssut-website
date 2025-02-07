import React, { useState } from 'react';
import CelebrationEffect from './Confetti';

function Hero() {
  const [heroHeight,setHeroHeight] = useState(window.innerHeight)
  return (
    <>
      <div id='HOME' style={{height:`${heroHeight}px`}} className={`hero-container bg-bg_c_2 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center  px-6 py-12 text-center lg:text-left overflow-hidden`}>
      <CelebrationEffect />
        <div className="text-content hero-left-div z-20  lg:pr-10">
          <h1 className="md:mt-[50px]  font-mono font-extrabold text-transparent text-4xl md:text-6xl lg:text-7xl  bg-clip-text bg-gradient-to-r from-primary to-secondary leading-tight animate__animated animate__fadeIn animate__delay-1s">
            
            IEEE VSSUT Student Branch
          </h1>

          <p className="mt-[30px] mb-[10px] font-extrabold text-2xl md:text-4xl lg:text-5xl text-secondary/80 pb-5 animate__animated animate__fadeIn animate__delay-2s">
            
            Advancing Technology for Humanity 
          </p>

          <a
            href="#from-the-desk"
            className="register-btn opacity-0 animate-bounce"
          >
            view more
          </a>
        </div>

        <div className="hero-right-div image-content  w-full max-w-lg mt-10 lg:mt-0 z-20">
          <img
            src="./assets/ieee-icon.svg"
            alt="Anweshan 2025"
            className="w-3/4 m-auto rounded-lg"
          />
        </div>
      </div>
      
    </>
  );
}

export default Hero;
