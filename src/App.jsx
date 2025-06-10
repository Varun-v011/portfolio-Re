import React from 'react';
import NavBar from './components/navbar';
import Mainpg from './components/mainpg';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contacts from './components/contacts';
import 'normalize.css'

function App() {
  return (
    <>
      <NavBar />
      <Mainpg />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
