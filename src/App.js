import './App.css'
import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <switch>
          <Router path="/">
            <Navbar/>
          </Router>
        </switch>
        <switch>
          <Router path="/Home">
            <Home/>
          </Router>
        </switch>
      </div>
    </Router>
    
  );
}

export default App;
