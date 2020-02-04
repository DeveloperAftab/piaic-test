import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { StaticQuery } from "gatsby";






const Menu = () => {
  
  const data = useStaticQuery(graphql`
  query {
    menu : allContentfulMenu{
      edges{
        node{
          title
          slug
        }
      }
    }

    programs :allContentfulAvailableProgram {
      edges {
        node {
          title
    
          }
        }
      }
  }

  

  
`);




return (
  <div className="navbar aos-init aos-animate">  
    <div className="container">  
      <div className="navbar_cont" >
        <div className="navbar-flex nav-flex-1 navbar-flex-height_35">
          <a href="/">
            <img className="Navbar-logo-piaic" src={require("../images/Logo.svg")} />
          </a>
          <div className="hamb-btn">
            <img src={require("../images/menuside.png")} />
          </div>
          </div>
          <div className="navbar-flex nav-flex-2"></div>


          <div className="navbar-flex nav-flex-3">
          <ul id = "nav-flex-ul" className='navbar-nav ma-auto' >

          
            {data.menu.edges.map(({ node }, index) => (
            <a href={node.slug}><li class>{node.title}</li></a>))}
            
            


            <a ><li class id="about">Available Programs
            <img src={require("../images/drop-down-arrow.svg")}  />
              <ul className="drop1ul">
               
               <div>
                {data.programs.edges.map(({node}, index) => (
                  <a href={node.slug}><li>{node.title}</li></a>
                ))}
                </div>
                
              </ul></li></a>



            <li class id="about">About <img src={require("../images/drop-down-arrow.svg")}  />
            <ul className="drop1ul">
            <a href="/thepresident"><li>The President</li></a>
                <a href="/mc"><li>Management Committee</li></a>
            </ul>
            </li>
            <a href="/wip"><li class> WIT </li></a>
          
          </ul>
          </div>
            
        
      </div>
    </div> 
  </div>
)

}
  
export default Menu;