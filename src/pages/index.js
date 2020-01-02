import React, { Children } from "react"

import { Link } from "gatsby"

import Layout from "../components/layout";

import availableprograms from"../components/availableprograms";
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout >
    <SEO title="Home" />
   
    
    <h1>Presidential</h1>
    <h5>for Artificial Intelligence & Computing (PIAIC)</h5>
    <h1></h1>
    <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research,
       and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. 
       We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>
 
    
    
   
  </Layout>
)

export default IndexPage;
