import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
import Props from "./Props";
import Product from "./Product";
import Hero from "./Components/Hero";
import Sec1 from "./Components/Sec1";
import Cards from "./Components/Cards";
import Nav from "./Components/Nav";
import Navbar from "./Components/Navbar";
import Bookdlts from "./Components/Bookdlts";
import Home from "./Components/Home";
import { Route,Routes } from "react-router-dom";
import Booklist from "./Components/Booklist";
import PageRead from "./Components/PageRead";
function App() {

  return (
    <>
    <Routes>
      <Route  path="/" element={<Home/>}>
      
      
      </Route>
      <Route path="/bookdlts" element={<Bookdlts/>}></Route>  
      <Route path="/booklist" element={<Booklist/>}></Route>
      <Route path="/pageread" element={<PageRead/>}></Route>
    </Routes>
    </>
  );
}

export default App;
