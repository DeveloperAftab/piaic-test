/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *<Header siteTitle={data.site.siteMetadata.title} />
 * 
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import President from "../components/president"

import Menu from "./menu"
import "./layout.scss"
import "./style.scss"
import "./node.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      maintitle: contentfulMainpagetitle{
        title
          subtitle
          description {
            description
          }
          
      }


    }
  `);
  return (
    <>
      <div className='root'>
        <div>
          <div data-aos="fade-down" data-aos-delay = '0s' className="navbar aos-init aos-animate">
            <div className = "container">
              <div className = "navbar_cont">
                <Menu />
                
              </div>
            </div>
          </div>
          <div className = 'container'>
            <div className = 'row'>

              <div className = 'col-sm-4 pt-5'>
              <President />
                <div className='d-flex justify-content-center align-items-end hw hh'>
                
                  <div className = 'hw'>
                  
                  </div>
                </div>
              </div>
              <main className = 'col-sm-8' data-aos-easing='data-aos-easing' data-aos-duration="1500" data-aos-delay="0">
              <div className="d-flex justify-content-center align-items-center hw hh"> 
                <div className="PresidentInitiative-headings">
                  
                  {children}
                </div>
              </div> 
              </main>
              
              
            </div>
            <div>
              <div className="AvailPrograms">
                <div className="container pt-5">
                  <div className="box1-cont-head pb-3">
                    <div className="row">
                      <div className="col-lg-9 col-12">
                        <h1 data-aos="fade-down" className="col-lg-9 col-12">Available Programs</h1>
                      </div>
                    </div>
                  </div>
                </div>


              </div>


            </div>



            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
                
            </footer>
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
