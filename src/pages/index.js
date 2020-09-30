import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import CardDeck from "react-bootstrap/CardDeck"
import YonderImage from "../images/projects/yonder.png"
function openMenu() {
  var element = document.getElementById("header")
  element.classList.add("active")
}

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />

      <div onClick={openMenu} id="mobile-menu-open" className="shadow-large">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div id="lead">
        <div id="lead-content">
          <h1>Ashik Simon</h1>
          <h2>Mechanical Engineer</h2>
          <a
            href="Ashik_Simon_Resume.pdf"
            className="btn-rounded-dark"
            target="_blank"
            download
          >
            Download Resume
          </a>
        </div>
        <div id="lead-overlay"></div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="heading">About Me</h2>
            </div>
            <div className="col-md-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                eget efficitur libero. Morbi dapibus porta quam laoreet
                placerat. Donec eu vehicula neque. Donec viverra lorem nunc,
                tempus euismod eros sollicitudin ut. Quisque et tincidunt
                libero. Donec id pharetra justo. Proin euismod lacinia dolor, eu
                scelerisque justo tempus pharetra. Vivamus nunc justo, finibus
                ut nisl sed, euismod rhoncus nulla. Proin sed magna egestas,
                egestas ante et, congue eros. In consequat, mauris dapibus
                tincidunt suscipit, ex libero aliquet diam, at maximus risus
                enim non leo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="experience" className="background-alt">
        <h2 className="heading">Experience</h2>
        <div id="experience-timeline">
          <div className="vtimeline-point">
            <div className="vtimeline-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="vtimeline-block">
              <span className="vtimeline-date">October 2019 – Present</span>
              <div
                data-date="October 2019 – Present"
                className="vtimeline-content"
              >
                <h3>Design/Build/Fly</h3>
                <h4>Fabrications Engineer</h4>
                <ul>
                  <li>
                    The Design/Build/Fly (DBF) student team designs, fabricates,
                    and demonstrates the flight capabilities of an
                    electric-powered, radio-controlled aircraft that can best
                    meet a given mission objective
                  </li>
                  <li>
                    Construct lightweight RC airplane airframes utilizing
                    various composites and adhesives includingcarbon fiber,
                    kevlar, and fiberglass
                  </li>
                  <li>
                    Prepare control surfaces and mount servos in innovative ways
                    to minimize drag
                  </li>
                  <li>
                    Create positive molds from foam using hot-wire and sanding
                    with a high attention to detail inorder to prevent
                    imperfections in final product
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="vtimeline-point">
            <div className="vtimeline-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="vtimeline-block">
              <span className="vtimeline-date">October 2019 – Present</span>
              <div
                data-date="October 2019 – Present"
                className="vtimeline-content"
              >
                <h3>Yonder Dynamics</h3>
                <h4>Motions Engineer</h4>
                <ul>
                  <li>
                    Build a functioning mars rover style robot for the
                    University Rover Challenge
                  </li>
                  <li>
                    Responsible for creating a light weight high dexterity robot
                    arm with six degrees of freedom
                  </li>
                  <li>
                    Work with Solidworks modeling/simulation as well as physics
                    risk reduction calculations
                  </li>
                  <li>
                    Developed rotating base out of acetyl that is capable of
                    withstanding high loads while remaining lightweight
                  </li>
                  <li>
                    Designed cost-effective parts that are manufacturable with
                    on campus equipment, primarily 3Dprinting and lasercutting
                  </li>
                  <li>
                    Review technical documentation to look for design
                    improvements
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="vtimeline-point">
            <div className="vtimeline-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="vtimeline-block">
              <span className="vtimeline-date">2017 - 2018</span>
              <div data-date="2017 - 2018" className="vtimeline-content">
                <h3>FIRST Robotics</h3>
                <h4>Senior Subsystem Engineer</h4>
                <ul>
                  <li>
                    Team of students and mentors construct a competitive robot
                    within six weeks
                  </li>
                  <li>
                    Oversee the integration of various subsystems by designing
                    and fabricating parts as well asdelegating tasks to newer
                    members
                  </li>
                  <li>
                    Thoroughly researched components to not violate competition
                    rules and regulations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="vtimeline-point">
            <div className="vtimeline-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="vtimeline-block">
              <span className="vtimeline-date">2015 – 2016</span>
              <div data-date="2015 – 2016" className="vtimeline-content">
                <h3>Northrup Grumman Challenge</h3>
                <h4>Engineering Team Member</h4>
                <ul>
                  <li>
                    Team-based competitions that are organized by Northrop
                    Grumman with strict time constraints,budget constraints, and
                    on the spot thinking for troubleshooting
                  </li>
                  <li>
                    Developed a helium airship design the first year by
                    manufacturing a custom aerodynamic balloonand implementing
                    model RC aircraft controls
                  </li>
                  <li>
                    {" "}
                    Designed a hovercraft capable of carrying 15 lbs of payload
                    through an obstacle course
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="education">
        <h2 className="heading">Education</h2>
        <div className="education-block">
          <h4>University of California San Diego, La Jolla</h4>
          <span className="education-date">September 2018 - Present</span>
          <h5>B.S. Mechanical Engineering</h5>
          <p>
            <b> Relevant Coursework: </b>Introductory Mathematical Physics,
            Elements of Materials Science, Engineering Graphics and Design,
            Business Project Management, Introductory Fluid Mechanics, MATLAB
            Programming for Engineering Analysis, Dynamics and Vibrations, Heat
            Transfer, Solid Mechanics I
          </p>
        </div>
      </div>

      <div id="projects" className="background-alt">
        <h2 className="heading">Projects</h2>
        <div className="container">
          <CardDeck>
            <Card className="m-3">
            <Card.Img className="img-fluid" variant="top" src={YonderImage} />
              <Card.Body className="p-3">
                <Card.Title>Yonder Dynamics Arm</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional 
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. Th content. Thdgfgggggggis content is a little bit
                  longer.
                  
                </Card.Text>
               
              </Card.Body>
              <div className="m-3">
              <Button className="project-button mt-2" variant="outline-primary" href="/yonder-dynamics-arm">View Project</Button>
              </div>
            </Card>
            <Card className="m-3">
            <Card.Img className="img-fluid" variant="top" src="https://via.placeholder.com/300" />
              <Card.Body className="p-3">
                <Card.Title>AIAA Design Build Fly</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
                
              </Card.Body>
              <div className="m-3">
              <Button className="project-button mt-2" variant="outline-primary" href="https://via.placeholder.com/300">View Project</Button>
              </div>
            </Card>
            <Card className="m-3">
            <Card.Img className="img-fluid" variant="top" src="https://via.placeholder.com/300" />
              <Card.Body className="p-3">
                <Card.Title>Covid Rover</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
         
               
               
              </Card.Body>
              <div className="m-3">
              <Button className="project-button mt-2" variant="outline-primary" href="https://via.placeholder.com/300">View Project</Button>
              </div>
            </Card>
          </CardDeck>

          <CardDeck>
            <Card className="m-3">
            <Card.Img className="img-fluid" variant="top" src="https://via.placeholder.com/300" />
              <Card.Body className="p-3">
                <Card.Title>FIRST Crusader</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-3">
            <Card.Img className="img-fluid" variant="top" src="https://via.placeholder.com/300" />
              <Card.Body className="p-3">
                <Card.Title>Craftvue</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-3">
            <Card.Img className="img-fluid" variant="top" src="https://via.placeholder.com/300" />
              <Card.Body className="p-3">
                <Card.Title>Northrop Grumman Airship</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>

      <div id="skills">
        <h2 className="heading">Skills</h2>
        <ul>
          <li className="vibrate-1">Modeling and Analysis </li>
          <li className="vibrate-1">Autodesk Fusion 360 </li>
          <li className="vibrate-1">Autodesk Inventor </li>
          <li className="vibrate-1">Solidworks</li>
          <li className="vibrate-1">MS Office</li>
          <li className="vibrate-1"> LaTeX</li>
          <li className="vibrate-1"> PhpStorm</li>
          <li className="vibrate-1"> Github </li>
          <li className="vibrate-1">Arduino </li>
          <li className="vibrate-1">Java</li>
          <li className="vibrate-1">Php </li>
          <li className="vibrate-1">C++</li>
          <li className="vibrate-1">MatLab</li>
          <li className="vibrate-1">Laravel Framework</li>
          <li className="vibrate-1">Fabrication Prototyping </li>
          <li className="vibrate-1">Woodshop Machinery</li>
          <li className="vibrate-1"> CNC</li>
          <li className="vibrate-1"> Lasercutter</li>
          <li className="vibrate-1"> 3D Printing</li>
          <li className="vibrate-1"> Soldering</li>
          <li className="vibrate-1"> Web Design</li>
        </ul>
      </div>

      <div id="contact">
        <h2>Get in Touch</h2>
        <div id="contact-form">
          <form method="POST" action="https://formspree.io/mrgobevp">
            <input
              type="hidden"
              name="_subject"
              value="Contact request from personal website"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
