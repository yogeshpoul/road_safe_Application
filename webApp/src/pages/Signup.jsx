import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Banner from "../images/banner.jpg";



export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [email,setEmail]=useState("");
    const navigate = useNavigate();

    return (
        <div className="flex justify-center bg-gray-900 h-screen" style={{ backgroundImage: `url(${Banner})` }}>
            {/* <div className="bg-white">
            username is {email}
            password is {password}
            firstName is {firstName}
            lastname is {lastName}
            </div> */}
            <div className="bg-orange-400 fixed w-full z-10">
                <nav className="flex justify-between">
                    <div className="pt-1.5 pl-2">
                        <h1 className="text-3xl">ROADSAFE</h1>
                    </div>
                    <div className="p-4 hover:transform hover:scale-110 transition duration-300 ease-in-out">
                        <a href="/" className="text-black">Home</a>
                    </div>
                </nav>
            </div>

            <div className="flex flex-col flex-justify-center m-auto mt-28">

                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign Up"} />
                    <SubHeading label={"Enter your infromation to create account"} />
                    <InputBox onChange={(e) => {
                        setFirstName(e.target.value)
                    }} label={"First Name"} placeholder={"first name"} />
                    <InputBox onChange={(e) => {
                        setLastName(e.target.value)
                    }} label={"Last Name"} placeholder={"last name"} />
                    <InputBox onChange={(e) => {
                        setUsername(e.target.value)
                    }} label={"Email"} placeholder={"email@gmail.com"} />
                    <InputBox onChange={(e) => {
                        setPassword(e.target.value)
                    }} label={"password"} placeholder={"password"} />
                    <div className="pt-4">
                        <Button onClick={async () => {
                            const response = await axios.post("https://road-backend.vercel.app/registration", {
                                firstName,
                                lastName,
                                email: username,
                                password
                            }).then(function (response) {
                                if (response.data.success == "User Registered Successfully") {
                                    navigate("/signin")
                                }
                                else {
                                    alert("you already have an account")
                                }
                            })
                            localStorage.setItem("token", response.data.token)
                        }} label={"Sign up"} />
                    </div>
                    <BottomWarning label={"Already have an account ? "} buttonText={"Sign In"} to={"/signin"} />
                    {/* <BottomWarning label={"Already have an account ? "} buttonText={"Sign In"} to={"/signin"} /> */}
                </div>
            </div>
        </div>
    );
};