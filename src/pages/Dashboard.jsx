
import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "./Card"


export const Dashboard=()=>{

    const [data,setData]=useState(null);
    const [filter,setFilter]=useState("")
    // const[complaint,setComplaint]=useState([])
    
    useEffect(() => {
        const fetchBalance = async () => {
          try {
            const response = await axios.post(
              `http://localhost:3000/bulk?&filter=${filter}`
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
      }, [filter]);

    return <div style={{backgroundColor:"#EEEEEE"}}>
      <div className="my-2">
            <input onChange={(e)=>{
                setFilter(e.target.value)
            }}type="text" placeholder="Search Users..." className="w-full px-2 py-1 border rounded border-slate-300"/>
        </div>
      {data ? (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {console.log(data)}
          {data.map((complaint, index) => (
            <div key={index}>
              <Card id={complaint._id} 
              location={complaint.location} 
              category={complaint.category} 
              description={complaint.description}
              createdAt={complaint.createdAt}
              updatedAt={complaint.updatedAt}
              image={complaint.image}
              statusData={complaint.status}
              email={complaint.email}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
}