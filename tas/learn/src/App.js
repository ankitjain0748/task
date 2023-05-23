import {BrowserRouter as Router, Route ,Routes} from "react-router-dom"
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import { Contextapi } from "./Contextapi";
import { useState } from "react";

function App() {
 const[loginname,setLoginame]= useState("ravi")
  return (
  <>
  <Contextapi.Provider value={{loginname,setLoginame}}>
<Router>
  <Header/>
  <Routes>
    
    <Route path="/" element={<Home/>}></Route>
    <Route path ="/con" element={<Contact/>}></Route>
    <Route path="/About" element={<About/>}></Route>
  </Routes>
</Router>
</Contextapi.Provider>
  </>
  );
}

export default App;
