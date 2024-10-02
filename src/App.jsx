import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from './componets/Signup';
import Signin from './componets/Signin';
import Home from './componets/Home';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup'  element={  <Signup /> } />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/' element={<Home key="general" category="general"/>} />
      <Route path='/business' element={<Home key="business" category="business"/>} />
      <Route path='/entertainment' element={<Home key="entertainment" category="entertainment"/>} />
      <Route path='/health' element={<Home key="health" category="health"/>} />
      <Route path='/science' element={<Home key="science" category="science"/>} />
      <Route path='/technology' element={<Home key="technology" category="technology"/>} />
    </Routes>
    </BrowserRouter>
  )
}
