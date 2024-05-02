import React from "react";
import Layout from "./../components/Layout/Layout";
import Registered from "../images/Registered.png";
import Resolved from "../images/Resolved.png";
import Inprogress from "../images/Inprogress.png";
import Cancelled from "../images/Cancelled.png";

export const About = () => {
  const teamMembers = [
    { src: Registered, number: '10', name: 'Registered' },
    { src: Resolved, number: '20', name: 'Resolved' },
    { src: Inprogress, number: '30', name: 'Inprogress' },
    { src: Cancelled, number: '40', name: 'Cancelled' }
  ];


  return (
  
      <div className="my-15 text-center">
        <h4 className="font-bold my-2 text-2xl md:text-3xl">Team Statistics</h4>
        
        <div className="flex justify-center flex-wrap mx-10 md:mx-20 lg:mx-40">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center m-10">
              <img 
                src={member.src} 
                alt={member.name} 
                className="w-40 md:w-48 rounded-lg"
              />
              <div className="text-lg font-bold mt-3">{member.number}</div>
              <div className="text-base mt-1">{member.name}</div>
            </div>
          ))}
        </div>
        
        {/* Additional content */}
        <p>
          {/* Your text content here */}
        </p>
      </div>

  );
};


