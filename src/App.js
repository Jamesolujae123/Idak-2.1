import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Signin from "./Signin";
import { Toaster } from "sonner";
import Nav from "./nav";
import Footer from "./footer";

const App = () => {
  return (
    <>
    <Nav />
    <Toaster position="top-right" />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signin" element={<Signin />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App