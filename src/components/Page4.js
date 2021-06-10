import React from 'react'
function Page4(){
    return(
        <div className='container4'>
            <div className='row'>
            <h3 className='pg4'>Contact Me</h3>
                <div className='col-md-6'>
                    <img className='page4img' alt=''src='https://res.cloudinary.com/dphnzljmv/image/upload/v1623325131/melinda-gimpel-5Ne6mMQtIdo-unsplash_q3tnpb.jpg'/>
                </div>
                <div className='col-md-6'>
                    <form className='cmt'>
                        <input type='input' className='input' placeholder='Fullname'/>
                        <input type='input' className='input' placeholder='Email'/>
                        <input type='textbox' className='input' placeholder='Comment'/>
                        <button type="button"className="btn btn-secondary input">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
 export default Page4