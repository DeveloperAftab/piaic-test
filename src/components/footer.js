import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { StaticQuery } from "gatsby";






const Footer = () => {
  
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
  <div className="footer"> 
  <div className="container">
      <div className="row">
          <div className="col-md-4 col-sm-6 ">
                <p class="footer-list-heads">Navigation</p>
                <ul class="footer-list-simple">
                    <li>Home</li>
                    <li>Apply</li>
                    <li>How it works</li>
                    <li>Artificial Intelligence</li>
                    <li>Cloud Native and Mobile Web Computing</li>
                    <li>Blockchain</li><li>Internet of Things and AI</li>
                    <li>Quantum Computing</li><li>5G and Software Defined Networking</li>
                    <li>About The President</li>
                    <li>Management Committee</li>
                    <li>Women Inclusion in Technology (WIT)</li>
                    
                </ul>
          </div>

          <div className="col-md-4 col-sm-6">
                <p class="col-md-4 col-sm-6">Locations </p>
                <div>
                    <p class="footer-list-heads">PIAIC Headquarters</p>
                    <ul class="footer-list-icon-ul">
                        <li><img src={require("../images/locationicon.svg")} /><a href="https://goo.gl/maps/UPXtpSiJ5NH2" target="_blank">Plot 245/2 M,  Block 6 PECHS, Karachi, Sindh 75100, Pakistan</a></li>
                        <li><img src={require("../images/phoneicon.svg")}/>+92-308-2220203 (WhatsApp as well)</li>
                    </ul>
                    


                </div>

                <div>
                    <p class="footer-list-heads">PIAIC Helpline</p>
                    <ul class="footer-list-icon-ul">
                        <li><img src={require("../images/phoneicon.svg")} />+92-308-2220203 (WhatsApp as well)</li>
                        </ul>
                </div>


                <div class="mt-5 original-connect">
                    <p class="footer-list-heads">Connect with us</p>
                    <a target="_blank" href="https://www.facebook.com/groups/piaic/"> <img class="footer-list-contactus-icons" src={require("../images/fb.svg")} /> </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg"> <img class="footer-list-contactus-icons" src={require("../images/youtubeicon.svg")} /> </a>
                </div>
          </div>


            <div class="col-md-4 col-sm-6 ">
                <p class="footer-list-heads" style={{color : "rgb(31, 47, 57)"}}>Karachi Field Offices</p>
                <div>
                    <p class="footer-list-heads">Karachi Field Office</p>
                    <ul class="footer-list-icon-ul">
                        <li><img src={require("../images/locationicon.svg")} /><a href="https://goo.gl/maps/r9yNA488tN52" target="_blank">A-25, Bahadurabad Chowrangi, Karachi, Sindh 74800, Pakistan</a></li>
                        <li><img src={require("../images/phoneicon.svg")} />+92-311-1729526</li>
                        </ul>
                </div>
                <div> 
                    <p class="footer-list-heads">Rawalpindi Field Office</p>
                    <ul class="footer-list-icon-ul">
                        <li><img src={require("../images/locationicon.svg")} /><a href="https://maps.google.com/maps?q=33.6328413%2C73.0678255&amp;z=17&amp;hl=en" target="_blank">4th-B Rd, Satellite Town, Rawalpindi, Punjab 46300</a></li>
                        <li><img src={require("../images/phoneicon.svg")} />051-4940669 / 0336-6660215</li>
                    </ul>
                </div>
                <div>
                    <p class="footer-list-heads">Islamabad Field Office</p>
                    <ul class="footer-list-icon-ul">
                        <li><img src={require("../images/locationicon.svg")} /><a href="https://goo.gl/maps/1MdVXe9L2j3teDSq9" target="_blank">F-10 Markaz F 10/3 F-10, Islamabad, Islamabad Capital Territory</a></li>
                        <li><img src={require("../images/phoneicon.svg")} />051-2223191 (WhatsApp as well)</li>
                        </ul>
                </div>
                <div>
                    <p class="footer-list-heads">Faisalabad Field Office</p>
                    <ul class="footer-list-icon-ul"><li><img src={require("../images/locationicon.svg")} /><a href="https://maps.app.goo.gl/GkG79ncwNuhFjevG6" target="_blank">Saylani House, 3rd Floor, Lal Mill Chowk, Factory Area, Faisalabad, Punjab</a></li>
                    <li><img src={require("../images/phoneicon.svg")} />(041) 2417281 / 0337 8659969 (WhatsApp as well)</li>
                    </ul>
                </div>
                <div class="mt-5 fake-connect">
                    <p class="footer-list-heads">Connect with us</p><a target="_blank" href="https://www.facebook.com/piaic/"> <img class="footer-list-contactus-icons" src="/static/media/facebookIcon.7a82d3ab.svg" /> </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg"> <img class="footer-list-contactus-icons" src={require("../images/youtubeicon.svg")} /> </a>
                </div>
            </div>


      </div>
      </div> 
    
  </div>
)

}
  
export default Footer;