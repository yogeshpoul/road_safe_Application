
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
        if (!token || token=='undefined') {
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

    return <div className="bg-blue-100/20">     
      <div className="shadow-lg shadow-yellow-300/50  flex justify-between rounded-md ">
      <div className="flex flex-row justify-center h-full ml-4 ">
            <div className="mt-4 pl-2">
            <input onChange={(e)=>{
                setFilter(e.target.value)
            }}type="text" placeholder="Search Users..." className="ml-3 px-2 py-1 border rounded border-slate-300"/>
            </div>
        </div>
        <div className="flex">
                <div className="flex flex-col justify-center h-full mr-2 uppercase font-bold">
                    <b> {adminName}</b>
                </div>
                <div className="rounded-full h-12 w-12 bg-yellow-200/50 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl uppercase font-bold">
                        {/* U */}
                        <b> {adminName[0]}</b>
                    </div>
                </div>
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