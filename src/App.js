import React, { useEffect } from 'react'
import './App.css';

//components
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner'
import AboutMe from './components/about me/AboutMe';
import Skills from './components/skills/Skills';
import Projects from "./components/projects/Projects"
import ContactMe from './components/contact me/ContactMe';
import Footer from './components/footer/Footer';
// context
import MenuActiveContextProvider from './context/projectMenu/MenuActiveContextProvider'
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      once: true, // run animation only once
    });
  }, []);

  return (
    <>
      <MenuActiveContextProvider>

        <Navbar />
        <div className="container">
          <Banner />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
        </div>
        <Footer />

      </MenuActiveContextProvider>
    </>
  );
}

export default App;
