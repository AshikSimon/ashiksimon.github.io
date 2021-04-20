import React from "react"

import Layout from "../../components/projects/project_layout"
import SEO from "../../components/seo"
import LightBox from "../../components/lightbox"
import { photos } from "../../srcsets/yonder-images"
import { Carousel } from "react-bootstrap"

const ProjectSummary = () => (
  <Layout>
    <SEO title="Yonder Dynamics Arm" />
    <div className="project-summary pt-4" id="page-container">
      <div id="project-content-wrap">
        <div className="container p-5">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-md-12 text-center">
              <h1>Yonder Dynamics</h1>
            </div>
          </div>
          <Carousel className = "mb-5" style={{ marginRight: "5px", marginLeft: "4px"}}>
            <Carousel.Item interval={30000}>
            <div className="embed-responsive embed-responsive-4by3">
            <iframe
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              src="https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1471532&width=400&height=300&edraw=true"
              name="PreviewFrame3D"
              id="PreviewFrame3D"
              width="400"
              height="300"
            ></iframe>
            </div>
              <Carousel.Caption>
                <p>
                Robot arm rotating base.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={30000}>
            <div className="embed-responsive embed-responsive-4by3">
            <iframe
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              src="https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1471242&width=400&height=300&edraw=true"
              name="PreviewFrame3D"
              id="PreviewFrame3D"
              width="400"
              height="300"
            ></iframe>
            </div>
              <Carousel.Caption>
                <p>Low pressure balloon wheel hub.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={30000}>
            <div className="embed-responsive embed-responsive-4by3">
            <iframe
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              src="https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1471533&width=400&height=300&edraw=true"
              name="PreviewFrame3D"
              id="PreviewFrame3D"
              width="400"
              height="300"
            ></iframe>
            </div>
              <Carousel.Caption>
                <p>Wrist assembly 3D printed gear modification.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div style={{ marginRight: "-5px", marginLeft: "-4px" }}>
            <LightBox photos={photos}></LightBox>
          </div>

          <div className="embed-responsive embed-responsive-4by3 mt-5">
            <iframe
              className="embed-responsive-item"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/766YikIs_aA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="embed-responsive embed-responsive-4by3 mt-5">
            <iframe
              className="embed-responsive-item"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/mREPp86L5vc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectSummary
