import "./App.css";
import './Nav.css';
import './Home.css';
import './Destination.css';
import './Crew.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/destination' element = {<Destination/>} />
          <Route path='/crew' element = {<Crew/>} />
          <Route path='/technology' element = {<Technology/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
