// App.js
import React from 'react';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footers from './components/Footers/footers';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    // Wrap the entire app in BrowserRouter
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Works />
        <Contact/>
        <Footers/>
      </div>
    </BrowserRouter>
  );
}

export default App;
