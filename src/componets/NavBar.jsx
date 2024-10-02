import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='bg-slate-500 flex flex-wrap items-center justify-between p-2'>
    <h1 className='ml-2 text-2xl text-white'>Hasan's News</h1>
    
    <button className='text-white md:hidden p-2' onClick={() => setMenuOpen(!menuOpen)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <div className={`p-2 w-full md:w-auto flex-col md:flex-row ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
      <Link className='ml-2 md:ml-10 hover:text-white' to="/">General</Link>
      <Link className='ml-2 md:ml-5 hover:text-white' to="/business">Business</Link>
      <Link className='ml-2 md:ml-5 hover:text-white' to="/entertainment">Entertainment</Link>
      <Link className='ml-2 md:ml-5 hover:text-white' to="/health">Health</Link>
      <Link className='ml-2 md:ml-5 hover:text-white' to="/science">Science</Link>
      <Link className='ml-2 md:ml-5 hover:text-white' to="/technology">Technology</Link>
    </div>
  </div>

  )
}
