import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import CardDeck from "react-bootstrap/CardDeck"
import resume from "../static/ashik_resume.pdf"

function openMenu() {
  var element = document.getElementById("header")
  element.classList.add("active")
}

function importAll(r) {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item)
  })
  return images
}
const images = importAll(
  require.context("../images/projects", false, /\.(png|jpe?g|svg)$/)
)

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
          <a href="/resume" className="btn-grad ml-5 mr-5">
            View Resume
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
                My name is Ashik and I'm currently a junior studying mechanical
                engineering at UCSD. My experience primarily comes from working
                at many project clubs/teams with a focus on robotics. At the
                moment, I'm a part of Yonder Dynamics and Design Build Fly at
                UCSD. I've also immersed myself in a bit of software development
                to adapt to the increasing necessity of being proficient in
                programming. I hope to continue a career focused on robotics and
                R&D with plenty of hands-on prototyping fabrication. This
                website is a platform to showcase all the projects I've worked
                on (work in progress).
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
              <span className="vtimeline-date">October 2020 – Present</span>
              <div
                data-date="October 2020 – Present"
                className="vtimeline-content"
              >
                <h3>General Dynamics NASSCO</h3>
                <h4>Engineering Intern</h4>
                <ul>
                  <li>
                    {" "}
                    Reviewed and updated documentation/processes for the ESB and
                    TAO ship programs
                  </li>
                  <li>
                    Utilized AutoCAD to design manufacturable modifications for
                    existing machinery
                  </li>
                  <li>
                    Actively participated in implementing and monitoring
                    continuous improvement initiatives to improve  safety, improve quality, reduce cycle time, and reduce costs.
                  </li>            
                  <li>
                    Attained an understanding of shipbuilding logistics by
                    regularly attending meetings with vendors, engineers, and
                    customers
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
                    various composites and adhesives including carbon fiber,
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
                <h4>Mechancial Design Engineer</h4>
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
                    Work with Solidworks modeling as well as physics risk
                    reduction calculations
                  </li>
                  <li>
                    Developed rotating base out of acetyl that is capable of
                    withstanding high loads while remaining lightweight
                  </li>
                  <li>
                    Designed cost-effective parts that are manufacturable with
                    on campus equipment, primarily 3D printing and lasercutting
                  </li>
                  <li>
                    Review technical documentation to look for design
                    improvements
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="experience-timeline">
            <div className="vtimeline-point">
              <div className="vtimeline-icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <div className="vtimeline-block">
                <span className="vtimeline-date">January 2018 – June 2019</span>
                <div
                  data-date="January 2018 – June 2019"
                  className="vtimeline-content"
                >
                  <h3>Craftvue</h3>
                  <h4>Founder</h4>
                  <ul>
                    <li>
                      Developed a custom application with Laravel web framework
                      to help teachers manage data, organizesafety assessments,
                      and material inventory
                    </li>
                    <li>
                      Effectively communicated with clients to properly
                      incorporate ideas and concepts into the application
                    </li>
                    <li>
                      {" "}
                      Successfully implemented in two schools with over 250
                      users.
                    </li>
                  </ul>
                </div>
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
                    and fabricating parts as well as delegating tasks to newer
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
                    Grumman with strict time constraints, budget constraints,
                    and on the spot thinking for troubleshooting
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
          <CardDeck >
            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["yonder-1.png"]}
                alt="Yonder Dynamics"
              />
              <Card.Body className="p-3">
                <Card.Title>Yonder Dynamics</Card.Title>
                <Card.Text align="left">
{/*}
                <ul style={{ paddingInlineStart: '20px'}}>
                  <li>
                    Team-based competitions that are organized by Northrop
               
                  </li>
                  <li>
                    Developed a helium airship design the first year by
                   
                  </li>
                  <li>
                    Designed a hovercraft capable of carrying 15 lbs of payload
                
                  </li>
  </ul> */}
                </Card.Text>
              </Card.Body>
              <div className="m-3">
                <Link className="btn-grad " to="/projects/yonder-dynamics">
                  View Project
                </Link>
              </div>
            </Card>
            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["dbf-1.jpg"]}
                alt="AIAA DBF"
              />
              <Card.Body className="p-3">
                <Card.Title>AIAA Design Build Fly</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <div className="m-3">
                <Link
                  className="btn-grad "
                  to="/projects/aiaa-design-build-fly"
                >
                  View Project
                </Link>
              </div>
            </Card>
            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["FIRST-powerup-1.jpg"]}
                alt="FIRST Power Up"
              />
              <Card.Body className="p-3">
                <Card.Title>FIRST Power Up</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <div className="m-3">
                <Link className="btn-grad " to="/projects/first-powerup">
                  View Project
                </Link>
              </div>
            </Card>
          </CardDeck>

          <CardDeck>
            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["FIRST-1.jpg"]}
                alt="FIRST Robotics"
              />
              <Card.Body className="p-3">
                <Card.Title>FIRST Crusader</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <div className="m-3">
                <Link className="btn-grad " to="/projects/first-crusader">
                  View Project
                </Link>
              </div>
            </Card>

            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["trebuchet-1.png"]}
                alt="Trebuchet"
              />
              <Card.Body className="p-3">
                <Card.Title>Trebuchet</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <div className="m-3">
                <Link className="btn-grad " to="/projects/trebuchet">
                  View Project
                </Link>
              </div>
            </Card>
            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["craftvue-1.png"]}
                alt="Craftvue"
              />
              <Card.Body className="p-3">
                <Card.Title>Craftvue</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <div className="m-3">
                <a
                  className="btn-grad "
                  target="_blank"
                  rel="noopener"
                  href="https://www.craftvue.com/"
                >
                  View Project
                </a>
              </div>
            </Card>
          </CardDeck>

          <CardDeck>
            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["airship-1.jpg"]}
                alt="Northrop Grumman Airship"
              />
              <Card.Body className="p-3">
                <Card.Title>Northrop Grumman Airship</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <div className="m-3">
                <Link className="btn-grad " to="/projects/wip">
                  View Project
                </Link>
              </div>
            </Card>

            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["3dponics-1.jpg"]}
                alt="3Dponics"
              />
              <Card.Body className="p-3">
                <Card.Title>3Dponics Hydroponics</Card.Title>
                {/*
                <Card.Text align="left">
                  
                <ul style={{ paddingInlineStart: '20px'}}>
                  <li>
                    Team-based competitions that are organized by Northrop
               
                  </li>
                  <li>
                    Developed a helium airship design the first year by
                   
                  </li>
                  <li>
                    Designed a hovercraft capable of carrying 15 lbs of payload
                
                  </li>
                </ul>
                </Card.Text>
                */}
              </Card.Body>
              <div className="m-3">
                <Link className="btn-grad " to="/projects/hydroponics">
                  View Project
                </Link>
              </div>
            </Card>
            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["sciolyarm-1.jpg"]}
                alt="Northrop Grumman Airship"
              />
              <Card.Body className="p-3">
                <Card.Title>Sci Oly Robot Arm</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <div className="m-3">
                <Link className="btn-grad " to="/projects/scioly-arm">
                  View Project
                </Link>
              </div>
            </Card>
          </CardDeck>

          <CardDeck>
            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["mae3robot-1.png"]}
                alt="FIRST Robotics"
              />
              <Card.Body className="p-3">
                <Card.Title>MAE 3 Robot</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <div className="m-3">
                <Link className="btn-grad " to="/projects/mae3-robot">
                  View Project
                </Link>
              </div>
            </Card>
           
            <Card className="m-3">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={images["stock-tracker-1.jpeg"]}
                alt="Stock Tracker"
              />
              <Card.Body className="p-3">
                <Card.Title>Stock Tracker</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <div className="m-3">
                <Link className="btn-grad " to="/projects/stock-tracker">
                  View Project
                </Link>
              </div>
            </Card>
            
            <Card className="m-3" style={{visibility:'hidden'}}>
    
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
