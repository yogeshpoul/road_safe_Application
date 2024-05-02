import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import img1 from "../images/hole1.jpg";
import img2 from "../images/water1.jpg";
import img3 from "../images/crack1.jpeg";
import img4 from "../images/hole2.jpg";
import img5 from "../images/water2.jpeg";
import img6 from "../images/crack2.jpeg";

export const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { src: img1, name: 'Potholes' },
    { src: img2, name: 'Water Logging' },
    { src: img3, name: 'Cracks' },
    { src: img4, name: 'Potholes' },
    { src: img5, name: 'Water Logging' },
    { src: img6, name: 'Cracks' },
  ];

  const handleMouseEnter = (name) => {
    setHoveredService(name);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  return (
    <>
      <div className="my-15 text-center">
        <h4 className="font-bold my-2 text-2xl md:text-3xl">Service Categorization</h4>
        
        <div className="flex flex-col md:flex-row justify-center items-center mx-10 md:mx-20 lg:mx-40">
          <div className="flex justify-center items-center flex-wrap">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center m-5 cursor-pointer relative"
                onMouseEnter={() => handleMouseEnter(service.name)}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                  src={service.src} 
                  alt={service.name} 
                  className="w-40 h-40 rounded-lg object-cover"
                />
                <div className={`text-lg font-bold mt-3 ${hoveredService === service.name ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-300 absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 p-2 rounded`}>{service.name}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center items-center flex-wrap mt-10 md:mt-0">
            {services.slice(3, 6).map((service, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center m-5 cursor-pointer relative"
                onMouseEnter={() => handleMouseEnter(service.name)}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                  src={service.src} 
                  alt={service.name} 
                  className="w-40 h-40 rounded-lg object-cover"
                />
                <div className={`text-lg font-bold mt-3 ${hoveredService === service.name ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-300 absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 p-2 rounded`}>{service.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        
        {/* Display hovered service name */}
      </div>
    </>
  );
};

// export default Services;
