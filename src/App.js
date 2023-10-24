import React from 'react';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Projects from './Component/Projects';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;