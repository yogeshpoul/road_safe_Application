import React from "react";
import Layout from "./../components/Layout/Layout";
import img1 from "../images/man.png";
import img2 from "../images/woman.png";

export const Team = () => {
  const teamMembers = [
    { src: img1, name: 'Lucky Vishwakarma' },
    { src: img2, name: 'Amruta Pradhan' },
    { src: img2, name: 'Maheen Shaikh' },
    { src: img1, name: 'Ashutosh Gaware' }
  ];

  return (
    <div className="pt-12">
      <div className="my-15 text-center">
        <h4 className="font-bold my-2 text-2xl md:text-3xl">Our Team</h4>
        
        <div className="flex justify-center flex-wrap mx-10 md:mx-20 lg:mx-40">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center m-5">
              <img 
                src={member.src} 
                alt={member.name} 
                className="w-40 h-40 rounded-lg"
              />
              <div className="text-lg mt-3">{member.name}</div>
            </div>
          ))}
        </div>
        
        {/* Additional content */}
        <p>
          {/* Your text content here */}
        </p>
      </div>
    </div>
  );
};

// export default Team;
