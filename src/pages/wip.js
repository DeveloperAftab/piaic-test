import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import wip from "../components/Appw"
import SEO from "../components/seo"
import Wipw from "../components/Appw"

const Wip = () => (
    <Layout>
    <div className="container-fluid p-0">
        <div class>
                <div class="women-background" ><img src={require("../images/win.jpeg")} ></img></div>
                <p className="women-paragraph">
                The Women Empowerment Division of the Presidential Initiative for Artificial Intelligence & Computing is committed to the empowerment and autonomy of women in Pakistan.<br></br><br></br>
                The single most important channel for the empowerment of women is education. The Women Empowerment Division is committed to providing the best technical education in the world with the flexibility to allow just about anyone to participate and improve their lives. The primary objective of the Women Empowerment Division is to provide a platform via which women can receive education and training to jumpstart their careers in the global technology industry.<br>
                </br>
                <br></br>
                The Women Inclusion in Technology project is the largest initiative on women education in Pakistan. The main of the project is to drive female participation in the technology industry in Pakistan from less than 5% to 30% over the next two years. Via this project, PIAIC is propagating awareness and training on the latest, most state-of-the-art technologies to women in Pakistan. The Women Empowerment Division will aid highly skilled women in technology to establish themselves as entrepreneurs and leaders in the technology industry not only in Pakistan but also around the world.<br></br>

                </p>

                </div>
            <div className="gallery-container">
                <p className="gallery-heading">Women Inclusion in Technology</p>
                <p className="gallery-para">PIAIC WOMEN'S GALLERY</p>
            </div>
            <div>
                <div className="react-photo-gallery--gallery">
                    <Wipw />
                </div>
            </div>
    </div>
     
     
    </Layout>
   
  )
  
export default Wip;