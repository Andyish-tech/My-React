import { useState } from 'react';
import {BrowserRouter, Routes, Route}  from 'react-router-dom'

import './App.css'
// import HOME from './components/Home'
import Card from './components/Card'
import Button from './components/Button'


function App() {
  return(
    <>
    <BrowserRouter>

    <Routes>

      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<Card />} />
      <Route path='/Services' element={<h1>Services</h1>} />
            
     </Routes>
  
     </BrowserRouter>
    </>
  )
}
export default App
