
import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "./Card"


export const Dashboard=()=>{

    const [data,setData]=useState(null);
    
    useEffect(() => {
        const fetchBalance = async () => {
          try {
            const response = await axios.get(
              "http://localhost:3000/getComplaintDetailAll"
            );

            // console.log(response.data.success)
            setData(response.data.success)
            // setBalance(response.data.balance);
            // setName(response.data.name)
          } catch (error) {
            console.error("Error fetching balance:", error);
          }
        };
        fetchBalance();
      }, []);

    return <div style={{backgroundColor:"#EEEEEE"}}>
      {data ? (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {console.log(data)}
          {data.map((complaint, index) => (
            <div key={index}>
              <Card id={complaint._id} location={complaint.location} 
              category={complaint.category} 
              description={complaint.description}
              createdAt={complaint.createdAt}
              updatedAt={complaint.updatedAt}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
}