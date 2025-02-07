import React from "react";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger"

const FromTheDesk = () => {
  gsap.registerPlugin(scrollTrigger);
  useGSAP(()=>{
    gsap.from(".ftd-1 img , .ftd-1 div, .ftd-2 p, .ftd-3",{
      opacity:0,
      // filter:"blur(10px)",
      y:100,
      duration:1,
      stagger:0.2,
      scrollTrigger:{
        scroller:"body",
        trigger:"#from-the-desk",
        scrub:true,
        // markers:true,
        end:"30%  50%",
        start:"10% 100%",
      }
    })
  },[])
  return (
    <div id="from-the-desk" className="w-full min-h-screen bg-bg_c_2 flex items-center justify-center py-6 sm:py-12">
      <div className="max-w-4xl w-full px-6 sm:px-8 md:px-12 py-8  rounded-xl ">
        <div className="ftd-1 flex flex-col md:flex-row items-center justify-center md:justify-start mb-8 space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="https://vssut.ac.in/faculty/harish-kumar-sahoo_photo1478482309.jpg" 
            alt="Professional Photo"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
              From the Desk of <span className="text-secondary">Branch Counsellor</span>
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-primary max-w-xl mx-auto md:mx-0">
              A brief note on industry insights, trends, and professional advice.
            </p>
          </div>
        </div>

        <div className="ftd-2 space-y-6 text-lg sm:text-xl text-primary">
          <p>
            As we continue to evolve in the ever-changing landscape of technology, it's essential to stay ahead of the
            curve. Whether you're a budding engineer, a seasoned professional, or someone exploring a new domain, staying
            updated with the latest trends and insights is key to success.
          </p>

          <p>
            In this space, we will explore cutting-edge advancements in various fields, from AI and robotics to circuit
            design and communication networks. Together, we will dive deep into the technologies shaping our future.
          </p>

          <p>
            So, let's embark on this journey of continuous learning and innovation. I am excited to share my knowledge, and
            I look forward to collaborating with like-minded professionals who are equally passionate about technology and
            making a difference.
          </p>
        </div>

        <div className="ftd-3 mt-8 sm:mt-12 text-right">
          <p className="text-xl sm:text-2xl font-semibold text-primary">Prof. Harish Kumar Sahoo</p>
          <p className="text-md sm:text-lg text-secondary">Professor</p>
        </div>
      </div>
    </div>
  );
};

export default FromTheDesk;
