import React from "react"
import { Link } from "gatsby"





const Menu = () => (
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
          
            <a href="/"><li class>Home </li></a>
            <a href="/howitworks"><li class>How It Works  </li></a>
            <a href="/apply1"><li class> Apply </li></a>
            <a ><li class id="about">Available Programs
            <img src={require("../images/drop-down-arrow.svg")}  />
              <ul className="drop1ul">
                <a href="/artificialInteligent"><li>Artificial Intelligent</li></a>
                <a href="/"><li>Cloud Native and Mobile Web Computing</li></a>
                <a href="/Blockchain"><li>Blockchain</li></a>
                <a href="/iot"><li>Internet Of Things</li></a>
                <a href="/QM"><li>Quantam Computing</li></a>
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
  
export default Menu;