import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Banner from "../images/banner.jpg";

export const Signin=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    return <div className="flex justify-center bg-gray-900 h-screen " style={{ backgroundImage: `url(${Banner})` }}>

        <div className="flex justify-center flex-col">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox onChange={(e)=>{
                    setUsername(e.target.value)
                }} label={"Email"} placeholder={"email@gmail.com"}/>
                <InputBox onChange={(e)=>{
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"pasword"}/>
                <div className="pt-3">
                    <Button onClick={async() => {
                        if(password.length<3){
                            alert("enter password with 6 or more digits")
                        }else{
                            
                            const response=await axios.post("https://road-backend.vercel.app/login", {
                                email:username,
                                password:password
                            })
                            console.log("clicked")
                            localStorage.setItem("token",response.data.token);
                            navigate("/dashboard");
                        }
                    }} label={"Sign in"}/>
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}