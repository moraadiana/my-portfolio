import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";

function App() {
  
    return (
        <div className="App">
            <Router>
            <div> 
                <Navbar />   
                <Routes>
                    <Route path="/" element={<Home />}> </Route>
                    <Route path="*" element={<div>Page Not Found</div>}> </Route>
                </Routes>  
            </div>
                
            </Router>
           
        </div>
    );
}
export default App;