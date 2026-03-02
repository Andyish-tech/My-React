import React, { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './page/login'
export default function App() {
  return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />}/>
  </Routes>
  </BrowserRouter>
  
  
  </>
  )
}
