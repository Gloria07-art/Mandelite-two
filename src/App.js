import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';
import {AboutUs} from './Pages/AboutUs';
import {ContactUs}from './Pages/ContactUs';
import { Footer } from './Pages/Footer';

function App() {
  return (
    <div>
    <>
    
          <Home/>
          <AboutUs/>
        

         <ContactUs/>

         <Footer/>
        
        
        </>
      </div>
  );
}

export default App;
