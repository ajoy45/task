import { Outlet } from "react-router-dom"
import Navbar from "./components/header/Navbar"



function App() {
  return (
    <div className="px-12">
       {/* header */}
       <Navbar></Navbar>
       {/* main content */}
       <Outlet></Outlet>
       
    </div>
  )
}

export default App
