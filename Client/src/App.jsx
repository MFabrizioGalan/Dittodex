import { Route, Routes } from "react-router-dom";
import { useState } from 'react'
import LandingPage from "./views/landing/LandingPage";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
