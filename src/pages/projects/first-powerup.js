import React from "react"

import Layout from "../../components/projects/project_layout"
import SEO from "../../components/seo"
import LightBox from "../../components/lightbox"
import { photos } from "../../srcsets/first-powerup-images"
import { Carousel } from "react-bootstrap"

const ProjectSummary = () => (
  <Layout>
    <SEO title="FIRST Power Up" />
    <div className="project-summary pt-4" id="page-container">
      <div id="project-content-wrap">
        <div className="container p-5">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-md-12 text-center">
              <h1>FIRST Power Up</h1>
            </div>
          </div>
          <div className="embed-responsive embed-responsive-4by3 mb-5">
            <iframe
              className="embed-responsive-item"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              src="https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1471264&width=250&height=250&edraw=true"
              name="PreviewFrame3D"
              id="PreviewFrame3D"
              width="400"
              height="300"
            ></iframe>
          </div>
          <div style={{ marginRight: "-5px", marginLeft: "-4px" }}>
            <LightBox photos={photos}></LightBox>
          </div>

          <div className="embed-responsive embed-responsive-4by3 mt-5">
            <iframe
              className="embed-responsive-item"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/ie9gI4XYSKE"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="embed-responsive embed-responsive-4by3 mt-3">
            <iframe
              className="embed-responsive-item"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/G41pLJvO-UA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="embed-responsive embed-responsive-4by3 mt-3">
            <iframe
              className="embed-responsive-item"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/d2OckUxiIYw"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <div className="embed-responsive embed-responsive-4by3 mt-3">
            <iframe
              className="embed-responsive-item"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/BlcfQj6uurE"
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
