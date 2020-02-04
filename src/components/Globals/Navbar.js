import React, { Component} from "react"
import logo from "../../images/Logo.svg"
import { Link } from "gatsby"
import "../layout.scss";
import "../style.scss";
import "../node.scss";

export default class Navbar extends Component {
  State = {
        navbarOpen:false,
        css: 'collapse navbar-collapse',
        links:[
            {
                id:1,
                path:'/',
                text:'home'
            },
            {
                id:2,
                path:'/about',
                text:'about us'

            },
            {
                id:3,
                path:'/howitworks',
                text:'How It Works'

            },

        ]
   
    };


    navbarHandler = () => {
        console.log('hello');
    };
  
    
    render() {
        return  ( 
            <nav className="navbar-flex nav-flex-3">
                <Link to="/">home</Link>
                <button className="navbar-toggler" type="button" onClick="this.navbarHandler"></button>
                <div >
                    <ul className="navbar-nav mx-auto">
                        {
                            this.state.links.map(link =>{
                             return(
                             <li key={link.id} className="nav-item">{link.text}</li>
                             );   
                            })
                        }

                    </ul>
                </div>
            </nav>
        
      );
        
    }
} 



/*

<div className = "navbar-flex nav-flex-3">
      
        <ul>
        {
            this.state.links.map(link => {
                return(
                    
                        <li key={link.id} className="nav-item"><Link to={link.path} className="nav-link text-capitalize">{link.text}</Link></li>
                      
                    
                );
            })
        }
          
          
        </ul>
        <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
            <span className="navbar-toggler-icon" />
        </button>
          
      </div>

      */