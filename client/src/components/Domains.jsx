import React from 'react';
import RegisterButton from './RegisterBtn';
import { domains } from '../Data/domains';
import { nonTech } from '../Data/nonTech';
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger"

function Domains() {
  gsap.registerPlugin(scrollTrigger);
  useGSAP(()=>{
    gsap.from("#DOMAINS h2 , #DOMAINS div div, .dom-register",{
      opacity:0,
      // filter:"blur(10px)",
      // scale:0,
      // ease:"circ",
      // duration:.5,
      stagger:.1,  
      scrollTrigger:{
        scroller:"body",
        trigger:"#DOMAINS",
        scrub:1,
        // markers:true,
        end:`90% 60%`,
        start:"top 80%",
      }
    })
  },[])
  return (
    <div id='DOMAINS' className="py-12 px-4 bg-bg_c_1">
      <h2 className="font-extrabold text-4xl sm:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-8">
        Chapter's
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg border-2 border-gray-300 overflow-hidden group transition-transform transform hover:scale-105"
            >
              <div className="flex items-center p-4">
                <div className="w-1/3">
                  <img
                    src={domain.image}
                    alt={domain.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="w-2/3 pl-4">
                  <h3 className="font-semibold text-xl text-gray-800 group-hover:text-secondary transition-colors">
                    {domain.name}
                  </h3>
                  <p className="text-primary text-sm mt-2">
                    {domain.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="dom-register mt-12 w-full flex items-center"><RegisterButton/></div> */}
      <h2 className="font-extrabold text-4xl mt-5 sm:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-8">
        non-tech
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nonTech.map((domain, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg border-2 border-gray-300 overflow-hidden group transition-transform transform hover:scale-105"
            >
              <div className="flex items-center p-4">
                <div className="w-1/3">
                  <img
                    src={domain.image}
                    alt={domain.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="w-2/3 pl-4">
                  <h3 className="font-semibold text-xl text-gray-800 group-hover:text-secondary transition-colors">
                    {domain.name}
                  </h3>
                  <p className="text-primary text-sm mt-2">
                    {domain.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="dom-register mt-12 w-full flex items-center"><RegisterButton/></div>
    </div>
  );
}

export default Domains;
