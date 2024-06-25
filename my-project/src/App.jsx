import { useState } from "react";

import "./App.css";
import Signin from "./Components/Signin";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";

function App() {
  return (
    <>
      <div className="p-20 ">
        {/* <div className="mx-auto ">
          <h1 className="p-10 border-2  text-xl ">Hello world</h1>
        </div>
        <div className="mx-auto ">
          <h1 className="p-10 border-2 text-xl ">
            Hello world 2
          </h1>
        </div> */}
         <Router>

         <Routes>
         <Route index  element={<Signin />} />
         <Route path="/home" element={<Home />} />

         </Routes>
         </Router>
        
      </div>
    </>
  );
}

export default App;
