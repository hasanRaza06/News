import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Signin() {
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
  return (
    <div className='flex justify-center h-screen'>
        <div className='flex flex-col justify-center'>
            <div className='h-auto rounded-md w-64 bg-slate-300 p-2'>
            <p className='text-3xl flex justify-center mt-2'>Signin</p>
            <input className='w-full rounded-md mt-2 h-10' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' />
            <input className='w-full rounded-md mt-2 h-10' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
            <button onClick={async()=>{
               const response=await axios.post("http://localhost:3000/signin",{
                email,
                password
               })
               console.log(response.data.message);
               localStorage.setItem("token",response.data.token);
               navigate("/home")
            }} className='mt-2 rounded-full w-full border h-12 bg-black text-white'>Signin</button>
            </div>
        </div>
    </div>
  )
}
