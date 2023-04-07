import './App.css';

//components
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner'
import AboutMe from './components/about me/AboutMe';
import Skills from './components/skills/Skills';
import Projects from "./components/projects/Projects"
import ContactMe from './components/contact me/ContactMe';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>

      <Navbar />
      <div className="container">
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
