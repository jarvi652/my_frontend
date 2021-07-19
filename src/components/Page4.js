import React from 'react'
import {Formik, Form, Field,ErrorMessage} from 'formik'
function Page4(){
    return(
        <div className='container4'>
            <div className='row'>
            <h3 className='pg4'>Contact Me</h3>
                <div className='col-md-6'>
                    <img className='page4img' alt=''src='https://res.cloudinary.com/dphnzljmv/image/upload/v1623325131/melinda-gimpel-5Ne6mMQtIdo-unsplash_q3tnpb.jpg'/>
                </div>
                <div className='col-md-6'>
                    <Formik
                        initialValues={{
                            fname:"",
                            email:"",
                            comment:""
                        }}
                        validate ={value =>{
                            let errors ={}
                            if(!value.fname){
                                errors.fname ="ENTER VALID INPUT"
                            }
                            else if(!value.email){
                                errors.email="ENTER VALID INPUT"
                            }
                            else if(!value.comment){
                                errors.comment="ENTER VALID INPUT"
                            }
                        }}
                        onSubmit={(value, {setSubmitting}) =>{
                            alert("validating form submitting form...")
                            setSubmitting(false)
                        }}
                    >
                        
                        {({isSubmitting})=>(
                            <Form className='cmt'>
                                <Field type='input' className='input' placeholder='Fullname' name='fname'/>
                                <ErrorMessage className="span" component="div" name="fname"/>
                                <Field type='input' className='input' placeholder='Email' name='email'/>
                                <ErrorMessage className="span" component="div" name="email"/>
                                <Field type='textbox' className='input' placeholder='Comment' name='comment'/>
                                <ErrorMessage className="span" component="div" name="comment"/>
                                <button type="button"className="btn btn-secondary input" disabled={isSubmitting}>SUBMIT</button>
                            </Form>  

                        )}
                        

                    </Formik>
                </div> 
            </div>
        </div>
    )
}
 export default Page4