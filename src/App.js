import './App.css'
import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'

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
        <switch>
          <Router path="/Page2">
            <Page2/>
          </Router>
        </switch>
        <switch>
          <Router path="/Page3">
            <Page3/>
          </Router>
        </switch>
        <switch>
          <Router path="/Page4">
            <Page4/>
          </Router>
        </switch>
      </div>
    </Router>
    
  );
}

export default App;
