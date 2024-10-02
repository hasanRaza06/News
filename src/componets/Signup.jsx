import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Signup() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    const navigate=useNavigate();
  return (
    <div className='flex justify-center h-screen'>
        <div className='flex flex-col justify-center'>
            <div className='h-auto rounded-md w-64 bg-slate-300 p-2'>
            <p className='text-3xl flex justify-center mt-2'>Signup</p>
            <input className='w-full rounded-md mt-2 h-10' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email' />
            <input className='w-full rounded-md mt-2 h-10' onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
            <input className='w-full rounded-md mt-2 h-10' onChange={(e)=>setName(e.target.value)} type="text" placeholder='name' />
            <input className='w-full rounded-md mt-2 h-10' onChange={(e)=>setAge(e.target.value)} type="number" placeholder='age' />
            <button onClick={async()=>{
                const response=await axios.post("http://localhost:3000/signup",{
                  email,
                  password,
                  name,
                  age
                })
                console.log(response.data.message);
                navigate("/home")
            }} className='mt-2 rounded-full w-full border h-12 bg-black text-white'>Signup</button>
            </div>
        </div>
    </div>
  )
}
