import React from 'react'

function Page2() {
    return(
        <div className='container2'>
            <h3 className='pg2'>Selected Projects</h3>
            <div className='row midas'>
              <div className="col-md-4 ">
                  <img  className='gitimages' alt="" src="https://res.cloudinary.com/dphnzljmv/image/upload/v1623270728/marvin-meyer-SYTO3xs06fU-unsplash_b3ack8.jpg"/>
                <h4>OVERWOOD CHALLENGE</h4>
                <p>

                    Migrant solutions assignment,
                    my team and i were assigned to recreate the 
                    https://overwood.ng website.
                </p>
                <button type="button"className="btn btn-secondary gitbtn">GITHUB LINK</button>
              </div>
              <div className="col-md-4 ">
                <img  className='gitimages' alt="" src="https://res.cloudinary.com/dphnzljmv/image/upload/v1623271414/marvin-meyer-HN1roKF-DS4-unsplash_p9ot0c.jpg"/>
                <h4>ETCH-A-SKETCH</h4>
                <p>
                    
                    A simple game of etch a sketch created using javascript. 
                    The is part of the odin project curriculum.
                    
                </p>
                <button type="button"className="btn btn-secondary gitbtn">GITHUB LINK</button>
              </div>
              <div className="col-md-4 ">
                <img  className='gitimages' alt="" src="https://res.cloudinary.com/dphnzljmv/image/upload/v1623271385/inaki-del-olmo-NIJuEQw0RKg-unsplash_senreu.jpg"/>
                <h4>LIBRARY</h4>
                <p>
                    
                    A simple e-library  created using javascript. It allows user to add books.
                    The is part of the odin project curriculum. 
                    
                </p>
                <button type="button" className="btn btn-secondary gitbtn">GITHUB LINK</button>
              </div>
            </div>  
        </div>
    )
}

export default Page2