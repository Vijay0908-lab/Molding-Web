import {  Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Home from "./pages/Home";
import ForOrders from "./pages/ForOrders";
import DieSection from "./pages/DieSection";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Error from "./pages/ErrorPage";
import { Navigate } from "react-router-dom";
import DetailedDie from "./ComponentForWeb/DetailedDie";
import AppLayout from "./ui/Applayout";
import DashBoard from "./pages/DashBoard";
import Protected from "./ui/ProtectedRoute"



const queryClient = new QueryClient({
    
  defaultOptions :{
    queries : {
      staleTime : 0,
    }
  }
})

export function App(){

  return (


    <QueryClientProvider client = {queryClient}>
      <ReactQueryDevtools initialIsOpen = {false} />
     <BrowserRouter >

     <Routes>
      <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
       <Route path="/orders" element={<ForOrders />} />
        <Route path="/diesdetails/:id" element ={<DetailedDie />} />

        <Route path="/about-us" element={<About />} />
          <Route path="/sign-up" element={<Login />} />



         <Route  
         path="/app"
           element = {
              <Protected>
                <Outlet />
              </Protected>
           }
         >

         <Route index element = { <Navigate replace to ="dashboard" />}/>
         <Route path= "dashboard" element = {<DashBoard/>}/>
          <Route path="dieSection" element={<DieSection />} />
         </Route>


          <Route path="*" element={<Error />} />
          </Route>
     </Routes>
    

     </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;