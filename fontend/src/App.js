import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Create from './Pages/Create';
import Edit from './Pages/Edit';

function App() {
  return (
    <>
     <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className=" navbar-nav mr-auto">
            <li className=" nav-item">
            <Link to={"/"} className="nav-link " >HOME</Link>
          
            </li>
            <li className=" nav-item"> 
            <Link to={"/create"} className="nav-link" >CREATE</Link>
            </li>
            
           
         </div>
     </nav>
  
     <div className='container'>
     <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/create" element={<Create/>} />
      <Route  path="/edits/:id" element={<Edit/>} />
      
    </Routes>


     </div>


    </>
  );
}

export default App;
