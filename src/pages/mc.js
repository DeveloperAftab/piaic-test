import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Yousuf from "../images/yousuflakhani.jpeg"
import { useStaticQuery, graphql } from "gatsby";

import SEO from "../components/seo"


const ManagementC = () => {

    const data = useStaticQuery(graphql`
  query {
    managementcommittee: allContentfulManagementCommittee {
        edges{
          node{
           picture{
              file {
              url
            }
            
          }
            name
            designation
            
          }
        }
      }
  }

  

  
`);

return (


    <Layout>
    
     
     
   
      <div className="container App mcCont">
          <div></div>
          <div className="row">
                <div className="col-12  d-flex justify-content-center align-items-center">
                    <h1 className="mcHeading">Management Committee</h1>
                </div>
                {data.managementcommittee.edges.map(({ node }) => (
                <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
                    <div className="import Img from ">
                        <div className="imgHead">
                          <div className="greenCir"></div>
                <div className="whiteCir" style={{backgroundImage:`url(${node.picture.file.url})`, backgroundPosition : "top right"}}></div>
                            <div className="imgDiv"></div>
                        </div>
                        <h1>{node.name}</h1>
                        <p>{node.designation}</p>

                        <div className="spans d-flex justify-content-center align-items-center">
                        <div>
                            <ul>
                                <li>
                              
                                </li>
                                <li>
                                </li>
                            </ul>
                        </div>
                        </div>


                    </div>
                    


                    <br />


                </div>  
                ))}              


                
           

          </div>

     
      </div>  
    </Layout>

    )
   
}
  
export default ManagementC;