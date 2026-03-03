import {  Routes, Route } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Home from "./pages/Home";
import ForOrders from "./pages/ForOrders";
import DieSection from "./pages/DieSection";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Error from "./pages/ErrorPage";
import { Navigate } from "react-router-dom";
import DetailedDie from "./ComponentForWeb/DetailedDie";

export function App(){

  return (
    <div className="App">
      <div className="flex flex-col min-h-screen">
        <nav>
       <Header />
        </nav>
       
       <main className="grow">
        <>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<ForOrders />} />
           <Route path="/details/:id" element ={<DetailedDie />} />
          {/* <Route path="/die-section" element={<DieSection />} /> */}
          <Route path="/about-us" element={<About />} />
          
          {/* <Route path="/contact-us" element={<Contact />} /> */}


          <Route path="/sign-up" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </>
       </main>
      <Footer />
      </div>
     
    </div>
  )
}

export default App;