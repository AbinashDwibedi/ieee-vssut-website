import React from 'react';
import { teamMembers } from '../Data/teamMembers';
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger"

function TeamMembers() {
  gsap.registerPlugin(scrollTrigger);
  useGSAP(()=>{
    gsap.from(".tm h2,.tm div div div",{
      opacity:0,
      filter:"blur(10px)",
      y:100,
      duration:1,
      stagger:0.2,
      scale:2,
      scrollTrigger:{
        scroller:"body",
        trigger:".tm",
        scrub:true,
        
        // markers:true,
        end:`${window.innerWidth<window.innerHeight? "60%  50%": "70% 50%"}`,
        start:"10% 100%"
      }
    })
  },[])
  return (
    <div className="tm py-12 px-4 bg-bg_c_2 overflow-hidden">
      <h2 className="font-extrabold text-3xl sm:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-8">
        Meet Our Team
      </h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-bg_c_1 rounded-2xl shadow-lg transition-transform transform hover:scale-105 overflow-hidden"
          >
            {/* Diagonal Gradient Header */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-primary to-secondary transform -skew-y-6 origin-top-left z-0"></div>

            {/* Profile Image */}
            <div className="relative flex justify-center mt-8 z-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-bg_c_1 shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-center relative z-10">
              <h3 className="font-bold text-lg text-color_1">{member.name}</h3>
              <p className="text-primary text-sm">{member.role}</p>
              <p className="text-gray-600 text-xs mt-2">{member.description}</p>
            </div>

            {/* Hover Action (Optional) */}
            <div className="absolute bottom-4 right-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-primary text-bg_c_2 rounded-full px-3 py-1 text-sm shadow-md">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;

// import React from 'react';
// import { teamMembers } from '../Data/teamMembers';

// function TeamMembers() {
//   return (
//     <div className="py-12 px-4 bg-bg_c_2">
//       <h2 className="font-extrabold text-3xl sm:text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-8">
//         Meet Our Team
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {teamMembers.map((member, index) => (
//           <div
//             key={index}
//             className="relative bg-bg_c_1 rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition-all"
//           >
//             {/* Accent Top Bar */}
//             <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-primary to-secondary"></div>

//             {/* Profile Image */}
//             <div className="relative flex justify-center mt-8">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-bg_c_2"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-4 text-center">
//               <h3 className="font-bold text-lg text-color_1">{member.name}</h3>
//               <p className="text-primary text-sm">{member.role}</p>
//             </div>

//             {/* Slide-In Description */}
//             <div className="absolute bottom-4 left-4 right-4 bg-primary text-white p-4 rounded-xl transform translate-x-full group-hover:translate-x-0 transition-all">
//               <p className="text-xs">{member.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TeamMembers;

