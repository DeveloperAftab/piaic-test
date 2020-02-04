/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *<Header siteTitle={data.site.siteMetadata.title} />
 * 
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "./bootstrap.min.css";
import "./bootstrap.css";
import AOS from "aos";
import { render } from "react-dom";
import "./cssfile.css";
import President from "../components/president";
/*import Navbar from "./Globals/Navbar";*/
import Menu from "./menu";
import "./layout.scss";
import "./style.scss";
import "./node.scss";
import Navbar from "./Globals/Navbar";




const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      
        allContentfulMainpagetitle {
          edges {
            node {
              title
              subtitle
              description {
                description
              }
            }
          }
        }
      }


    
  `);
  console.log(data)
  return (
    <>
      <div id="root">
        
          <div>
            <div data-aos="fade-down" data-aos-delay = '0s' className="navbar aos-init aos-animate">
              
                
                
                  <Menu  />
                  
                  
                
              
            </div>


                <div >
                <div > 
               

                    {children}
                
                </div> 
                </div>
                
                



          </div>
        </div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
