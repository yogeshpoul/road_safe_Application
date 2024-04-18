import React, { useEffect, useState } from 'react';
import { Button } from "../components/Button";

export const Card = ({id,email, location, category, description, createdAt, updatedAt,image,statusData }) => {
  const [status, setStatus] = useState('Update Status'); // default status
  
  console.log(status,id)
  // const {base64String}
  
  useEffect(() => {
    const updateStatusInBackend = async () => {
      try {
        const response = await fetch('http://localhost:3000/updateStatus', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
            status: status,
          }),
        });

        const data = await response.json();
        console.log("Updated Detail:", data);
      } catch (error) {
        console.error("Error updating complaint details:", error);
      }
    };

    if (status !== 'Update Status') {
      updateStatusInBackend();
    }
  }, [status, id]);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    // Here you can implement the functionality to update the status in your database or state
    // For example: updateStatusInDatabase(e.target.value);
    
  };

  return (
    <div style={{ padding: 10, display: "flex", flexDirection: "row", justifyContent: "flex-center", border: "2px", borderRadius: "5px", borderBlockColor: "#ffffff" }}>
      <div style={{ padding: 50, backgroundColor: "white", width: 300, background: "white", alignItems: "center", justifyContent: "center", borderRadius: "30px" }}>
        {/* <img src="public\c-6.jpg" alt="react logo" style={{ width: '400px', paddingBottom: "10px" }} /> */}
        <img src={`data:image/jpeg;base64,${image}`}  style={{ width: '400px', paddingBottom: "10px" }}/>
        <h3>Email: {email}</h3>
        <p>Location: {location}</p>
        <p>Category: {category.join(", ")}</p>
        <p>Description: {description}</p>
        <p>Created At: {new Date(createdAt).toLocaleString()}</p>
        <p>Updated At: {new Date(updatedAt).toLocaleString()}</p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-center", alignItems: "center", paddingTop: "10px" }}>
          <p style={{ paddingRight: "10px" }}>Status:</p>
          <select value={status} onChange={handleStatusChange} style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}>
  {statusData === "Update Status" ? (
    <>
      <option disabled hidden value="Update Status">{statusData}</option>
      <option value="Inprocess">Inprocess</option>
      <option value="Completed">Completed</option>
    </>
  ) : statusData === "Completed" ? (
    <>
      <option value="Completed">{statusData}</option>
      <option value="Inprocess">Inprocess</option>
    </>
  ) : (
    <>
      <option value="Inprocess">Inprocess</option>
      <option value="Completed">Completed</option>
    </>
  )}
</select>



      
        </div>
      </div>
    </div>
  );
};
