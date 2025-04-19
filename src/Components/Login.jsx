import React from 'react'
import { Link,  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "./firebase/Firebase.config.js"

function Login() {
  
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const auth= getAuth(app)
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        console.log(email, Password);
        signInWithEmailAndPassword(auth, email, Password)
            .then((res) => navigate('/Dashboard'))
            .catch((error) => alert(error))
       
    }
  return (
    <div >
                <div className='bg-blue-500 p-2 flex justify-end'><Link to='/Home' className=' p-2   bg-blue-500 text-white rounded-md font-semibold  hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500'>Home</Link></div>
      
      <div  className='h-153 flex items-center justify-center overflow-hidden'>

         <form onSubmit={handleSubmit} className="border border-gray-200 p-6 w-100 h-120 bg-white rounded-xl shadow-md  ">
            <h1 className='block  text-2xl  text-blue-400 font-extrabold text-center mb-6 mt-6'>Login</h1>

            <label htmlFor="username" className="block  text-sm font-medium  text-gray-600 ">Username or Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
             
             <label htmlFor="password" className="block mt-6 text-sm font-medium text-gray-600">Password</label>
            <input type={showPassword ? "text" : "password"} value={Password} onChange={(e) => setPassword(e.target.value)} id="password" name="password"className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <div className="flex items-center mt-2">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2"
          />
          <label htmlFor="showPassword" className="text-sm text-gray-600">Show Password</label>
        </div>

           

            

            <button type="submit" className="w-full mt-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button>
            
            <div className='flex mt-2 items-center justify-center'>  
              <Link to="" className="text-sm text-blue-500 hover:underline">Forgot Password?</Link>
            </div>
           
            <p className="mt-6 text-center text-sm  text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/SignUp" className="text-blue-500 hover:underline">
                      Sign Up
                    </Link>
            </p>
            
         </form>
         </div>
    </div>
  )
}

export default Login