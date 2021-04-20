import React from "react"

import Layout from "../../components/projects/project_layout"
import SEO from "../../components/seo"
import LightBox from "../../components/lightbox"
import { photos } from "../../srcsets/first-crusader-images"

const ProjectSummary = () => (
  <Layout>
    <SEO title="FIRST Crusader" />
    <div className="project-summary pt-4" id="page-container">
      <div id="project-content-wrap">
        <div className="container p-5">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-md-12 text-center">
              <h1>FIRST Crusader</h1>
            </div>
          </div>
          <div style={{ marginRight: "-5px", marginLeft: "-4px" }}>
            <LightBox photos={photos}></LightBox>
          </div>

          <div className="embed-responsive embed-responsive-4by3 mt-5">
            <iframe
              className="embed-responsive-item"
              width="400"
              height="300"
              src="https://www.youtube.com/embed/D3YFt0CKKds"
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
