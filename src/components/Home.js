import React from 'react'

function Home() {
    return(
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
                        <img className ='female' alt ="" src='https://res.cloudinary.com/dphnzljmv/image/upload/v1623072275/profile/woman-removebg-preview_g0k5fr.png'/>
                    </div>
                </div>
                
        </div>
    )
    
}
export default Home