import { Route, Routes } from "react-router-dom";
import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </>
  )
}

export default App
