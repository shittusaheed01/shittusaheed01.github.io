// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work />
    </div>
  );
}

export default App;
