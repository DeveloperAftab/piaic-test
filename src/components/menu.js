import React from "react"
import { Link } from "gatsby"





const Menu = () => (
  <menu>
    <div className = "navbar-flex nav-flex-3">
      
      <ul id = "nav-flex-ul" >
      
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about"> About</Link></li>
        <li><Link to="/howitworks">HowItWorks</Link></li>
        <li><Link to="/apply">Apply</Link></li>
        <li>Available Programs</li>
        <li>WIT</li>
      </ul>
        
    </div>
      
  </menu>  
  )
  
  export default Menu;