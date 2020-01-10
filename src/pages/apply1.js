import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"


const ApplyPage = () => (
    <Layout>
    
        
        
             <div className="adminSignup-main-div d-flex justify-content-center align-items-center">
                 <center>
                    <div className="adminSignup-form-div">
                        <div className="adminSignup-head">
                            <span className="adminSignup-head-text my-auto ">Student Sign Up</span>
                            
                        </div>
                        <img src={require("../images/Logo.svg")}  alt="PIAIC Logo" title="Presidential Initiative for Artificial Intelligence and Computing" 
                            class="adminSignup-m-r-l adminSignup-display-block adminSignup-logo"></img>
                        <p class="adminSignup-piaic-text">Presidential Initiative for  Artificial Intelligence and Computing</p>

                        <form classNam="adminSignup-form" method="POST">
                            <div className="adminSignup-form-group">
                                <label className="adminSignup-text-light-green m-0 p-0">CNIC</label>
                                <br></br>
                                <input class="form-control" label="CNIC" type="text" name="cnic" id="cnic" placeholder="Enter CNIC" maxlength="13" value=""></input>
                            </div>
                            <br></br>

                            <div className="adminSignup-form-group">
                                <label className="adminSignup-text-light-green m-0 p-0">Email</label>
                                <br></br>
                                <input class="form-control" label="CNIC" type="email" name="email" id="email" placeholder="Enter Email Address" maxlength="13" value=""></input>
                            </div>
                            <br></br>

                            <div className="form-group">
                            <label className="adminSignup-text-light-green m-0 p-0">Password</label>
                                <br></br>
                                <input class="form-control" label="password" type="password" name="password" id="password" placeholder="Enter Password" maxlength="13" value=""></input>

                            </div>
                            <div className="already-member">
                                <p className="sign-up">Already a member? <a href="/" className="sign-up-link"> Sign In</a></p>
                                <p className="sign-up">
                            <a href="./howitworks" target="_blank" class="sign-up-link" >How It Works?</a></p>
                               
                                
                            </div>

                            <button type="submit" class="adminSignup-submit-button adminSignup-m-r-l">Sign Up</button>


                        </form>
                        <br></br>
                      
                    </div>
                </center>
            </div>

            
      
      
     
    </Layout>
   
    )
  
export default ApplyPage;