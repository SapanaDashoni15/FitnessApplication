//rafce
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'; 
import BmiCalc from './Components/BmiCalc';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Pricing from './Components/Pricing';
import WorkoutSessions from './Components/WorkoutSessions';
import Hero from './Components/Hero';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <BmiCalc />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
