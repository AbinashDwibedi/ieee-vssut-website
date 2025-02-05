import React from 'react';
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger"

function About() {
  gsap.registerPlugin(scrollTrigger);
  useGSAP(()=>{
    gsap.from("#ABOUT h2, #ABOUT p",{
      opacity:0,
      filter:"blur(10px)",
      y:100,
      duration:1,
      stagger:0.2,
      scrollTrigger:{
        scroller:"body",
        trigger:"#ABOUT",
        scrub:true,
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
    </div>
  );
}

export default About;
