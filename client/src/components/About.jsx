import React from 'react';
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger"
import { officeBearers } from '../Data/officeBearers.js';

function About() {
  gsap.registerPlugin(scrollTrigger);
  useGSAP(()=>{
    gsap.from("#ABOUT h2, #ABOUT p, #ABOUT div div div",{
      opacity:0,
      // filter:"blur(10px)",
      y:100,
      // duration:1,
      // stagger:0.2,
      scrollTrigger:{
        scroller:"body",
        trigger:"#ABOUT",
        scrub:1,
        // markers:true,
        end:"-10%  50%",
        start:"10% 100%"
      }
    })
  },[])
  return (
    <div  id='ABOUT' className="min-h-1/2 bg-bg_c_1 flex flex-col justify-center items-center px-4 py-16">
      <h2 className="font-extrabold text-4xl sm:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-8">
        About
      </h2>
      <p className="text-lg sm:text-xl text-center max-w-4xl text-primary">
      The IEEE VSSUT STUDENT BRANCH BURLA Got The Petition For Its Approval To Establish On 6th November 2018.It Was Then Inaugurated On 14th February 2019 By Prof. T.Srinivas From IISC, Bangalore In The Presence Of Hon'ble Vice Chancellor Of VSSUT, Burla, Prof. Atal Chaudhuri, The IEEE Branch Councilor, Dr. Harish Kumar Sahoo And The Faculty Advisor Dr. Papia Ray. By March It Became The Largest Group With Faculty Members And Students From Electrical, Electronic And Computer Science Branch. Presently It Is Actively Running With 120 Members And 25 Office Bearers.
      </p>
      <div className="flex justify-center items-center p-4 mt-5">
  <div className="flex flex-wrap justify-center gap-6 w-full">
    {officeBearers?.map((officeBearers, index) => {
      return (
        <div
          key={index}
          className="bg-white rounded-lg border-2 border-gray-300 overflow-hidden group transition-all transform hover:scale-105 hover:shadow-xl flex-shrink-0 flex-grow w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <div className="flex items-center p-4">
            {/* Image container with uniform size */}
            <div className="w-32 h-32 flex justify-center items-center bg-white border-4 border-gray-200 rounded-full overflow-hidden group-hover:border-secondary transition-all">
              <img
                src={officeBearers.image}
                alt={officeBearers.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Text content */}
            <div className="w-2/3 pl-6">
              <h3 className="font-semibold text-xl text-gray-800 group-hover:text-secondary transition-colors">
                {officeBearers.name}
              </h3>
              <p className="text-primary text-sm mt-2">{officeBearers.role}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>


    </div>
  );
}

export default About;
