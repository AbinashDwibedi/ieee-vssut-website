import React from 'react';
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger"
function ContactUs() {
  gsap.registerPlugin(scrollTrigger);
  useGSAP(()=>{
    gsap.from("#CONTACT",{
      opacity:0,
      filter:"blur(10px)",
      y:100,
      duration:1,
      stagger:0.2,
      scrollTrigger:{
        scroller:"body",
        trigger:"#CONTACT",
        scrub:true,
        // markers:true,
        end:"20% 60%",
        start:"top 80%"
      }
    })
  },[])
  return (
    <div id='CONTACT' className="py-12 px-4 bg-bg_c_2">
      <h2 className="font-extrabold text-4xl sm:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-8">
        Contact Us
      </h2>
      <div className="max-w-3xl mx-auto  p-8 rounded-lg space-y-8">
        <div className="space-y-4 flex flex-col items-center">
          <div className="flex items-center space-x-3">
            <i className="fas fa-phone-alt text-blue-500 text-2xl"></i>
            <span className="text-lg text-gray-800">Debabrata Sahoo : 95609 00718</span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-phone-alt text-blue-500 text-2xl"></i>
            <span className="text-lg text-gray-800">Ashutosh Panda : 824 955 5202</span>
          </div>
        </div>
        <div className="flex justify-center space-x-8 text-2xl text-gray-800">
          <a
            href="https://www.instagram.com/ieeevssut/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://x.com/IEEE_VSSUT_SB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/ieee-vssut-burla-student-branch/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; 2024 IEEE VSSUT Student Branch</p>
        </div>
        <div className="text-center text-sm">
          <p>
            Made by{' '}
            <a
              href="https://abinash-dwibedi.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Abinash Dwibedi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
