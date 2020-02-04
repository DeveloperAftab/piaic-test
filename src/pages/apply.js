import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"


const ApplyPage = () => (
    <Layout>
    
      
    
        

        
                <div className="adminSignup-main-div d-flex justify-content-center align-items-center">
                    <div className="adminSignup-form-div">
                        
                        <div className="adminSignup-form-div">
                            <div className="adminSignup-head">
                                <span className="adminSignup-head-text my-auto ">Singn Up</span>
                            </div>
                                <p className="adminSignup-piaic-text" >"Presidential Initiative for " <br></br> " Artificial Intelligence and Computing"</p>
                                <form className="adminSignup-form"  method='post'>
                                    <div className='adminSignup-form-group'>
                                        <label className='adminSignup-text-light-green m-0 p-0'>CNIC</label>
                                        <br></br>
                                        <span className='m-0 text-danger'>
                                            <small className='font-weight-bold'>Please provide your valid CNIC or B-Form number, we will verify it.</small>
                                        </span>
                                        <input className='form-control' label="CNIC" type="text" name='cnic' placeholder="Enter CNIC" maxLength="13" value></input>

                                    </div>
                                    <br></br>

                                    
                                    <div className='adminSignup-form-group'>
                                        <label className='adminSignup-text-light-green m-0 p-0'>Email</label>
                                        <br></br>
                                    
                                        <input className='form-control' id='Email' label="Email" type="email" name='Email' placeholder="Enter Email Adress" value></input>

                                    </div>
                                    <br></br>


                                    <div className='adminSignup-form-group'>
                                        <label >Password</label>
                                        <br></br>
                                    
                                        <input className='form-control' label="Email" id = 'Password' type="password" name='Pasword' placeholder="Enter Your Password"  value></input>

                                    </div>
                                    <br></br>


                                    <div style={{ display: "flex", justifyContent : "space-between", alineite: "center",}}>
                                        <p >Already a member? <a >Sign In</a></p>
                                        <p ><a className='sign-up-link' target="_blank" style={{textDecoration: "underline"}}>How It Works?</a></p>
                                    </div>
                                    <button className='adminSignup-submit-button adminSignup-m-r-l' type="submit">Singn</button>

                                </form>
                            
                        </div>
                    </div>
                </div>

      

            
      
      
     
    </Layout>
   
    )
  
export default ApplyPage;