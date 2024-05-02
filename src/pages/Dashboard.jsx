
import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "./Card"
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";



export const Dashboard=()=>{
    let cnt = 1;
    const [data,setData]=useState(null);
    const [filter,setFilter]=useState("");
    const [adminName,setAdminName]=useState("0");
    const navigate=useNavigate();
    // const[complaint,setComplaint]=useState([])
    
    
    useEffect(() => {
        const fetchBalance = async () => {
          try {
            const response = await axios.post(
              `https://road-backend.vercel.app/bulk?&filter=${filter}`
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

      useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/signin"); // Redirect to sign-in page if token is not present
        } else {
          try {
            console.log(token)
            const decodedToken = jwtDecode(token);
            // console.log("token idsgfsidog",decodedToken)
            // const adminEmail = decodedToken.email;
            const adminName = decodedToken.firstName;
            // Now you have the admin's name, you can use it as needed
            console.log("Admin Name:", adminName);
            setAdminName(adminName);
          } catch (error) {
            console.error("Error decoding token:", error);
            // Handle any errors that occur during token decoding
          }
        }
      }, [navigate]);

    return <div style={{backgroundColor:"#EEEEEE"}}>
      <br></br>
      <div className="my-2 flex flex-rows " style={{width: "300px", textAlign:"center", margin: "0 auto"}}>
            <div>
            <input onChange={(e)=>{
                setFilter(e.target.value)
            }}type="text" placeholder="Search Users..." className="w-full px-2 py-1 border rounded border-slate-300"/>
            </div>
            <div className="right-0">
              {adminName}
            </div>
        </div>
      {data ? (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {console.log(data)}
          {data.map((complaint, index) => (
            <div key={index}>
              <Card 
              count = {cnt++}
              id={complaint._id} 
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