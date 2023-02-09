import React, { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import AuthContext from '../context/Authcontext';



const Login = () => {
    let  {login, authTokens}  = useContext(AuthContext)
    const Navigate = useNavigate()

    useEffect(() => {
        if (authTokens) {
            Navigate('/')
        }
        else {

        }
    }, [])
    return (
        <div className='bg-white min-h-screen'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
                <h1 className='text-5xl text-center mt-48 font-mono text-black'></h1>
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl  lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black">
                        Login
                    </h1> 
                    <form className="mt-6" onSubmit={login}>
                        <div className="mb-2">
                            <label for="form" className="block text-sm font-semibold text-gray-800">Username</label>
                            <input type="text" name='username' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label for="password" className="block text-sm font-semibold text-gray-800">Password</label>
                            <input type="password" name='password' className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-6">
                            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transform bg-black rounded-md hover:bg--600 ">
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        <Link to='/signup'>
                            Don't have an account?{" "}
                            <p className="font-medium text-black-600 hover:underline">
                                Signup
                            </p>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login