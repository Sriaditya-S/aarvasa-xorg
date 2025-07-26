import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ansh from "/assets/Team Ansh.jpg"
import uday from "/assets/uday.png"
// import archit from "/assets/archit.png"
import anirudh from "/assets/Team Anirudh.jpg"
import arjit from "/assets/Team Arjit.jpg"
import sriaditya from "/assets/sriaditya.png"
import { Heading } from "../Utils/Heading";
import { motion } from "motion/react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Uday Prakash Sahu",
    role: "Founder & CEO",
    image: uday,
    tagline: "Expert in Networking & Sales | External Affairs Lead",
    description: "Uday Sahu leads Aarvasa as CEO, driving growth, partnerships, and market expansion. With expertise in business networking and real estate sales, he strengthens stakeholder relations and positions Aarvasa as a key player in property investment.",
    linkedin: "https://www.linkedin.com/in/udayprakashsahu/",
    facebook: "",
    instagram: "https://www.instagram.com/uday.sahu_10?igsh=MWVzNW85dTRydndpdg%3D%3D",
  },
  {
    name: "Ansh Dubey",
    role: "Co-Founder & COO",
    image: ansh,
    tagline: "Operations Strategist | Product & Process Leader",
    description: "Ansh Dubey, COO of Aarvasa, oversees operations, workflow optimization, and product delivery. Focused on efficiency, he ensures smooth platform functionality, from listings to customer experience, translating ideas into scalable, real-world execution.",
    linkedin: "https://www.linkedin.com/in/ansh-dubey-526325273/",
    facebook: "",
    instagram: "https://www.instagram.com/_ansh_.dubey/",
  },
  // {
  //     name: "Archit Agarwal",
  //     role: "HOD R&D",
  //     image: archit,
  //     tagline: "",
  //     description:"" ,
  //     linkedin: "https://www.linkedin.com/in/archit-agarwal03/",
  //     facebook: "",
  //     instagram: "https://www.instagram.com/archit_agarwal1511?igsh=MWo0b3V0bHF0NW1vaA%3D%3D",
  // },
  {
    name: "Anirudh Saxena",
    role: "Co-Founder & CTO",
    image: anirudh,
    tagline: "Tech Architect | Innovation & Engineering Lead",
    description: "Anirudh Saxena, CTO of Aarvasa, drives AI tools, smart contracts, and infrastructure development. He ensures a secure, scalable tech foundation, shaping the digital systems that power Aarvasa’s platform and future growth.",
    linkedin: "https://www.linkedin.com/in/anirudh-saxena-481ba2245/",
    facebook: "",
    instagram: "https://www.instagram.com/_anirudh__.07?igsh=MTJocm1va3VtZDV0bw%3D%3D",
  },
  {
    name: "Arjit Pandey",
    role: "Executive Administrator",
    image: arjit,
    tagline: "Operations Specialist | Organizational Strategist | Workflow Optimizer",
    description: "Arjit Pandey ensures Aarvasa’s internal operations run smoothly. As Executive Administrator, he leads planning, coordination, and execution. Bridging people and processes, he drives structured, dependable outcomes that align with Aarvasa’s vision and support company performance at every level.",
    linkedin: "https://www.linkedin.com/in/arjit-pandey-2b546a247/",
    facebook: "",
    instagram: "https://www.instagram.com/_.arjit.pandey._?igsh=MWtiOGR6OXNoNWM1eg%3D%3D",
  },
  {
    name: "Sriaditya S",
    role: "VP of IT Operations",
    image: sriaditya,
    tagline: "Technology Strategist | System Architect | Cybersecurity Advocate",
    description: "Sriaditya S leads IT Operations at Aarvasa, managing the company’s digital infrastructure, cloud systems, and cybersecurity. He ensures platform stability, secure workflows, and drives Aarvasa’s tech innovations for scalable business growth.",
    linkedin: "https://www.linkedin.com/in/sriadityas/",
    facebook: "",
    instagram: "https://www.instagram.com/sriaditya_kamikaze?igsh=amdnbDR4MG82cDFh",
  },
];


const TeamCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-64 min-w-[16rem] md:min-w-[16rem] max-w-full rounded-xl shadow-lg overflow-hidden bg-[#6C1E3C] cursor-pointer flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ width: isHovered ? "32rem" : "16rem" }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      layout
    >
      {/* Image Section */}
      <motion.div
        className="h-full"
        animate={{ width: isHovered ? "50%" : "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        layout
      >
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover rounded-l-xl"
        />
      </motion.div>

      {/* Right Description Panel */}
      {isHovered && (
        <motion.div
          className="h-full bg-[#6C1E3C] bg-opacity-90 text-white px-4 py-3 flex flex-col justify-between overflow-hidden rounded-r-xl"
          animate={{ width: "50%", opacity: 1 }}
          initial={{ width: 0, opacity: 0 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          layout
        >
          <div>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <h4 className="text-base font-bold">{member.name}</h4>
                <p className="text-xs text-gray-100 font-semibold">{member.role}</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                {member.facebook && (
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-white text-sm hover:text-gray-400 scale-125 hover:scale-150" />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-white text-sm hover:text-gray-400 scale-125 hover:scale-150" />
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white text-sm hover:text-gray-400 scale-125 hover:scale-150" />
                  </a>
                )}
              </div>
            </div>
            {member.tagline && (
              <p className="text-[11px] italic text-gray-200 mt-1 font-medium">{member.tagline}</p>
            )}
            {member.description && (
              <p className="text-[11px] mt-2 text-gray-100 font-medium">{member.description}</p>
            )}
          </div>


        </motion.div>
      )}
    </motion.div>
  );
};

const Team = () => {
  return (
    <section className="px-4 sm:px-6 py-10 font-[poppins]">
      <Heading label="Meet Our Team" />
      <div className="flex flex-col justify-center flex-wrap gap-6">
        <div className="flex flex-wrap gap-6 justify-center items-start">
          {teamMembers.slice(0,3).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
        <div className="flex flex-wrap gap-6 justify-center items-start">
          {teamMembers.slice(3,6).map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;