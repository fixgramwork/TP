import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from "./Home.js";
import Contact from './Contact.js';
import About from './About.js';
import Login from './Login.js';
import AVG from './AVG.js';
import Signup from './signup.js';
import "./App.css";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Contact/' element={<Contact />}></Route>
        <Route path='About/' element={<About />}></Route>
        <Route path='Login/' element={<Login />}></Route>
        <Route path='AVG/' element={<AVG />}></Route>
        <Route path='Signup/' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
