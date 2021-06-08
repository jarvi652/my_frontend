import React from 'react'

function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href ="#">Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href ="#" >About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href ="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container-1'>
                <div className='row'>
                    <div className="col-md-6">
                        <div className='text'>
                            <h1 className='her'>Katana Jarvis Betty</h1>
                            <h3 className='herwork'>
                                Designer
                                <span className='gt'> & </span>
                                Coder
                            </h3>
                            <h5 className='title'>
                                A web developer
                            </h5>
                            <button type="button" className='btn btn-secondary'>RESUME</button>
                        </div>   
                    </div>
                    <div className="col-md-6">
                        <img className ='female'src='https://res.cloudinary.com/dphnzljmv/image/upload/v1623072275/profile/woman-removebg-preview_g0k5fr.png'/>
                    </div>
                </div>
                
            </div>
        </div>
      
    )
   
}
export default Navbar