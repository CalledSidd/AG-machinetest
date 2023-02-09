import Axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const baseUrl = 'http://127.0.0.1:8000/'

const Signup = () => {
    const navigate                 = useNavigate()
    const [name, setName]          = useState("")
    const [username, setUsername]  = useState("")
    const [email, setEmail]        = useState("")
    const [phone, setPhone]        = useState("")
    const [date, setDate]          = useState("")
    const [state, setState]        = useState("")
    const [password, setPassword]  = useState("")
    const [password2, setPassword2]= useState("")
    const Signup = (e) => {
        e.preventDefault();
        if (password.length < 3 || username.length < 3 || email.length < 5){
            alert("Credentials do not valid")
        }
        else if(password !== password2){
            alert("Passwords do not match")
        }
        else{ 
                console.log("In singup function axios.post")
                Axios.post(baseUrl + '/signup', {
                    username : username,
                    email    : email,
                    password : password,
                }).then((response) => {
                    console.log(response)
                    navigate('/login')
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    


    return (
        <div className='bg-white min-h-screen'>
            <div className="relative flex flex-col  justify-center min-h-screen overflow-hidden ">
            <h1 className='text-5xl text-center mt-36 font-mono text-black'></h1>
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl  lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black ">
                        Signup
                    </h1>
                    <form className="mt-6" onSubmit={Signup}>
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Username </label>
                            <input type="text" onChange={(e)=>{
                                setUsername(e.target.value)
                            }} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label for="email" className="block text-sm font-semibold text-gray-800"> Email </label>
                            <input type="email" onChange={(e)=>{
                                setEmail(e.target.value)
                            }} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label for="password" className="block text-sm font-semibold text-gray-800">Password</label>
                            <input type="password" onChange={(e)=>{
                                setPassword(e.target.value)
                            }} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label for="password" className="block text-sm font-semibold text-gray-800">Confirm Password</label>
                            <input type="password" onChange={(e)=>{
                                setPassword2(e.target.value)
                            }} className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg--600 ">
                                Signup
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Already have an account?{" "}
                        <Link to='/login'>
                            <p className="font-medium text-black-600 hover:underline">
                                Login
                            </p>
                        </Link>
                    </p>
                </div>
            </div>
            <script src="https://unpkg.com/flowbite@1.5.5/dist/datepicker.js"></script>
        </div>
    )
}

export default Signup