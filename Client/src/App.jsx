import { Route, Routes } from "react-router-dom";
import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import NavBar from "./views/landing/NavBar/NavBar";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </>
  )
}

export default App
