import React, { Children } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { StaticQuery } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SimpleSlider from "../components/Globals/Slider"
import availableprograms from"../components/availableprograms";
import SEO from "../components/seo";
import Presidentv from "../components/Appv"
import Footer from "../components/footer"




const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    mainpage : allContentfulMainpagetitle {
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

    programs :allContentfulAvailableProgram {
      edges {
        node {
          title
  
          
    
          }
        }
      }
    
  }

  
`);
  
  return(
    
  <Layout >


        <div>
          
    
            <div className = 'row'>

              <div className = 'col-sm-4 pt-5'>

                <div className='d-flex justify-content-center align-items-end hw hh'>
                
                  <div className = 'hw'>
                  <img src={require("../images/president-png.png")} />
                  </div>
                </div>
              </div>
              <main className = 'col-sm-8' data-aos-easing='data-aos-easing' data-aos-duration="1500" data-aos-delay="0">
              <div className="d-flex justify-content-center align-items-center hw hh"> 
                <div className="PresidentInitiative-headings">
                {data.mainpage.edges.map(({ node }, index) => (
                <div>
                
            
            
                  <h1 className='PresidentInitiative-heading-h1 pt-0 pt-sm-5'>{node.title}</h1>
                  <h2 className='PresidentInitiative-heading-h2'>{node.subtitle}</h2>
                
                  <p className='PresidentInitiative-heading-p'>{node.description.description}</p>
                  <div className="d-flex my-btn-div justify-content-end align-items-center">
                    <div>
                      <table className="PresidentInitiative-table">
                        <tbody>
                          <tr className="animated fadeIn delay-0.5s">
                            <td>
                            <a target="_blank" href="https://portal.piaic.org/signup" class="animated fadeInUp delay-1s  PresidentInitiative-button-apply PresidentInitiative-button-status">APPLY</a>
                            </td>
                            <td>
                            <span class="animated fadeInDown delay-0.5s PresidentInitiative-vr-line"></span>
                            </td>
                            <td>
                            <div class="animated fadeInUp delay-2s ">
                              <div class="PresidentInitiative-10k"> 
                                <div class="odometer odometer-auto-theme">
                                  <div class="odometer-inside">
                              <div class="PresidentInitiative-AppRec"><br></br><h3>65 k+</h3>
                              </div>
                              </div>
                              </div>
                              </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                ))}
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
                        <h1  className="col-lg-9 col-12"></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='container p-0'> 
                <div className='row p-0'>
                  <div className='col-md-3 col-lg-3 avail-pro-con'>
                    <div className='new-program-box new-ai-box'>
                      <div className='new-upper-bar new-ai-bar'>

                        <strong className='new-program-title new-ai-title'>
                    
                          artificial intelligence
                          
                          </strong>
                      </div>
                      
                    </div>
                  </div>

                  <div className='col-md-3 col-lg-3 avail-pro-con'>
                    <div className='new-program-box new-cn-box'>
                      <div className='new-upper-bar new-cn-bar'>
                        <strong className='new-program-title new-cn-title'>Cloud Native</strong>
                      </div>
                      
                    </div>
                  </div>



                  <div className='col-md-3 col-lg-3 avail-pro-con'>
                    <div className='new-program-box new-bc-box'>
                      <div className='new-upper-bar new-bc-bar'>
                        <strong className='new-program-title new-bc-title'>Block Chain</strong>
                      </div>
                      
                    </div>
                  </div>




                  <div className='col-md-3 col-lg-3 avail-pro-con'>
                    <div className='new-program-box new-iot-box'>
                      <div className='new-upper-bar new-iot-bar'>
                        <strong className='new-program-title new-iot-title'>Internet of Things and AI</strong>
                      </div>
                      
                    </div>
                  </div>


                  



                </div>
              </div>


              <div className=' AvailPrograms-programsInDev-section'>
                <div data-aos="fade-right" className="AvailPrograms-programsInDev-hr-line mt-5 mb-4 aos-init aos-animate">

                </div>
                <h2 data-aos="fade-left" className="AvailPrograms-programsInDev-heading mb-4 aos-init aos-animate"> Programs in Development</h2>
                <div data-aos="fade-up" className="AvailPrograms-programsInDev aos-init aos-animate">
                  <div id="AvailPrograms-programsInDev-content" className="AvailPrograms-programsInDev-content">
                    <div className="AvailPrograms-programsInDev-box AvailPrograms-programsInDev-box-SDN-5G">
                      <div className="hw hh d-flex justify-content-center align-items-center innerText">
                      SDN/NFV for 5G
                      </div>
                    </div>

                    <div className="AvailPrograms-programsInDev-box AvailPrograms-programsInDev-box-AUGMENTED-REALITY">
                      <div className="hw hh d-flex justify-content-center align-items-center innerText">
                      Augment Reality
                      </div>
                    </div>

                    <div className="AvailPrograms-programsInDev-box AvailPrograms-programsInDev-box-ENTREPRENEURSHIP">
                      <div className="hw hh d-flex justify-content-center align-items-center innerText">
                      Enterpreneurship
                      </div>
                    </div>

                    <div className="AvailPrograms-programsInDev-box AvailPrograms-programsInDev-box-MOBILE-WEB-SPECIALIST">
                      <div className="hw hh d-flex justify-content-center align-items-center innerText">
                      Mobile Web Specialist
                      </div>
                    </div>

                    <div className="AvailPrograms-programsInDev-box AvailPrograms-programsInDev-box-IOS">
                      <div className="hw hh d-flex justify-content-center align-items-center innerText">
                      IOS
                      </div>
                    </div>


                    <div className="AvailPrograms-programsInDev-box AvailPrograms-programsInDev-box-ANDROID">
                      <div className="hw hh d-flex justify-content-center align-items-center innerText">
                      ANDROID
                      </div>
                    </div>

                    


                  </div>
                  <div className="controls ng-star-inserted">
                    <button className="controls__item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18">
                        <path d="M8.25 16.313L1.5 9l6.75-7.313" stroke="#2e3d49" strokeWidth="2" fill="none" fillRule ="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </button>

                    <div className="page-indicators ng-star-inserted">
                      <div className="page-indicators__item ng-star-inserted">
                        <div className="page-indicators__item__icon"></div>

                      </div>
                      <div className="page-indicators__item ng-star-inserted">
                        <div className="page-indicators__item__icon">

                        </div>

                      </div>

                      <button className="controls__item">
                      <svg  width="10" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 1.688L8.5 9l-6.75 7.313" stroke="#2e3d49" strokeWidth="2" fill="none" fillRule ="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>

                      </button>
                    </div>

                  </div>
                </div>
              </div>


              <div data-aos="fade-in" className="PresidentSaysVideo-bg aos-init aos-animate">
                <center>
                  <div className="container">
                    <h1 data-aos="fade-left" className="PresidentSays-heading aos-init aos-animate">Video</h1>
                   
                    <div className="row">
                      

                      <div className="col-lg-8 PresidentLaunchingWeb-video-col">
                      <iframe data-aos="fade-in" class="hw hh PresidentLaunchingWeb-video-iframe aos-init aos-animate" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" src="https://www.youtube.com/embed/_rUQ301EJAo"></iframe>
                        
                      </div>



                    </div>

                  </div>
                </center>
              </div>




              <div data-aos="fade-in" className="PresidentLaunchingWeb-bg aos-init aos-animate">
                <center>
                  <div className="container PresidentLaunchingWeb-container">
                    <h1 data-aos="fade-right" className="PresidentLaunchingWeb-content-heading aos-init aos-animate">Images</h1>
                    
                  </div>

                  <div>
                    
                   
                   <SimpleSlider />
                   
                      
                    
                  </div>

                </center>
              </div>



              <div className="supportingBg">
                <div className="container App supportingCont" style={{paddingBottom: "60px", paddingTop : "50px"}}>
                  <div className="row">
                    <div className="col-12 mt-2 d-flex justify-content-center align-items-center">
                    <p data-aos="fade-down" class="SupportingPartners-heading aos-init aos-animate">Strategic Partners</p>
                    </div>
                    <div className="col-12 mt-4 mb-4 supporterIcons d-flex justify-content-center align-items-center">
                      <div class> 
                        <ul>
                        <li><img data-aos="fade-up" data-aos-delay="300" src={require("../images/panacloud.png")} alt="panacloud-logo" class="aos-init aos-animate" /></li>
                        <li><img data-aos="fade-up" data-aos-delay="300" src={require("../images/psx2.png")} alt="PSX" class="aos-init aos-animate" /></li>
                        <li><img data-aos="fade-up" data-aos-delay="300" src={require("../images/saylanilogo.png")} alt="panacloud-logo" class="aos-init aos-animate" /></li> 
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>





                  <Footer />




             


            </div>



            
          </div>
        
      






    
    
   
  </Layout>
  )
  }

export default IndexPage;
