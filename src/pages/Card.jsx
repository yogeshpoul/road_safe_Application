import React, { useState } from 'react';
import { Button } from "../components/Button";

export const Card = ({id, location, category, description, createdAt, updatedAt }) => {
  const [status, setStatus] = useState('Update Status'); // default status
  
  console.log(status,id)

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    // Here you can implement the functionality to update the status in your database or state
    // For example: updateStatusInDatabase(e.target.value);
  };

  return (
    <div style={{ padding: 10, display: "flex", flexDirection: "row", justifyContent: "flex-center", border: "2px", borderRadius: "5px", borderBlockColor: "#ffffff" }}>
      <div style={{ padding: 50, backgroundColor: "white", width: 300, background: "white", alignItems: "center", justifyContent: "center", borderRadius: "30px" }}>
        <img src="public\c-6.jpg" alt="react logo" style={{ width: '400px', paddingBottom: "10px" }} />
        <h3>Location: {location}</h3>
        <p>Category: {category.join(", ")}</p>
        <p>Description: {description}</p>
        <p>Created At: {new Date(createdAt).toLocaleString()}</p>
        <p>Updated At: {new Date(updatedAt).toLocaleString()}</p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-center", alignItems: "center", paddingTop: "10px" }}>
          <p style={{ paddingRight: "10px" }}>Status:</p>
          <select value={status} onChange={handleStatusChange} style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}>
            <option disabled hidden value="Update Status">Update Status</option>
            <option value="Inprocess">Inprocess</option>
            <option value="Completed">Completed</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};
