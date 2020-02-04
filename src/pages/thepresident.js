import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import SEO from "../components/seo"
import President from "../components/president";
import Alvi from "../images/president-png.png"






const ThePresident = () => {

const data = useStaticQuery(graphql`
  query {
    thepresident: allContentfulThepresident {
        edges{
          node{
            name
            designation
            description {
              description
            }
          }
        }
      }
  }

  

  
`);
return (

    

    <Layout>
        
    <div>
        <div className="aboutCont App">
            <div className="d-flex justify-content-center align-items-center">


                <div className="cardArea ">
                    <div className="imgHead">
                        <div class="greenCir"></div>
                        <div class="whiteCir3" style={{backgroundImage:`url(${Alvi})`, backgroundPosition : "top right"}}> </div>
                        <div class="imgDiv"></div>
                    </div>
                    {data.thepresident.edges.map(({ node }) => (
                    <div>
                        
                        <h1>{node.name}</h1>
                        <p>{node.designation}</p>
                    
                    </div>
                    ))} 
                    
               
                    
                    
                    
                    
                    <div className="spans d-flex justify-content-center align-items-center">
                        <div>
                            <ul>
                                <li>
                                <a target="_blank" href="https://www.facebook.com/Dr.ArifAlvi/"><img class="span" src={require("../images/fb-logo.png")} /></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://twitter.com/ArifAlvi"><img class="span" src={require("../images/twet.png")} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




            </div>

            
            {data.thepresident.edges.map(({ node }) => (
            <div className="presidentP">
                <p >
                    {node.description.description}

                </p>
            </div>
            ))} 
        </div>


        <div className="copyright-cont d-flex">
            <div className="copy-text">
                <b>© 2019 PIAIC. All rights reserved.</b>
            </div>

        </div>
    </div>
        
       
     
    </Layout>
   )
 }
  
export default ThePresident;