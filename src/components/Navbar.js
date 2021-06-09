import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'


function Navbar() {
    return(
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active"  to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active"  to="/Page2">Work</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </Router>
        
      
    )
   
}
export default Navbar