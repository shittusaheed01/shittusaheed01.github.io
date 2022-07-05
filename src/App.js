// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work />
      <Contact/>
    </div>
  );
}

export default App;
