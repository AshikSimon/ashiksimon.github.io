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
              <h1>Yonder Dynamics Arm</h1>
            </div>
          </div>
          <Carousel className = "mb-3" style={{margin: "2px"}}>
            <Carousel.Item interval={3000}>
            <div className="embed-responsive embed-responsive-4by3">
            <iframe
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              src="https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1471242&width=250&height=250&edraw=true"
              name="PreviewFrame3D"
              id="PreviewFrame3D"
              width="400"
              height="355"
            ></iframe>
            </div>
              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <div className="embed-responsive embed-responsive-4by3">
            <iframe
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              src="https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1471242&width=250&height=250&edraw=true"
              name="PreviewFrame3D"
              id="PreviewFrame3D"
              width="400"
              height="355"
            ></iframe>
            </div>
              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
         
            <Carousel.Item interval={500}>
            <div className="embed-responsive embed-responsive-4by3">
            <iframe
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              src="https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1471242&width=250&height=250&edraw=true"
              name="PreviewFrame3D"
              id="PreviewFrame3D"
              width="400"
              height="355"
            ></iframe>
            </div>
              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <LightBox photos={photos}></LightBox>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectSummary
