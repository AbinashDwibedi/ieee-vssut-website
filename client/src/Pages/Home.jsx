import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Domains from "../components/Domains";
import Contact from "../components/Contact";
import TeamMembers from '../components/TeamMembers';
import FromTheDesk from "../components/FromTheDesk";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
function Home() {
    useGSAP(()=>{
      const timeline = gsap.timeline();
      timeline.from(".left-nav img",{
        y:-100,
        opacity:0,
        duration:0.5,
      })
      if(window.innerWidth > 768){
        timeline.from(".right-nav ul li",{
          y:-100,
          opacity:0,
          duration:0.5,
          stagger:0.1
        })
      }
      else{
        timeline.from(".hamburger",{
          y:-100,
          opacity:0,
          duration:0.5,
          stagger:0.1
        })
      }
      timeline.fromTo(".hero-left-div h1,.hero-left-div p,.hero-left-div a",{
        filter:"blur(10px)",
        y:100,
        duration:.5,
        opacity:0,
        stagger:0.2
      },{
        y:0,
        opacity:1,
        filter:"blur(0px)",
        stagger:0.2
    },"-=.5")
      timeline.from(".hero-right-div img",{
        scale:0,
        // rotateZ:"360deg",
        opacity:0,
        filter:"blur(10px)",
        duration:0.5
      },"-=.5")
    },[])
  return (
    <>
      <Navbar />
      <Hero />
      <FromTheDesk/>
      <About />
      <TeamMembers />
      <Domains />
      <Contact />
    </>
  );
}

export default Home;
