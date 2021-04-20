import React from "react"

import Layout from "../../components/projects/project_layout"
import SEO from "../../components/seo"
import LightBox from "../../components/lightbox"
import { photos } from "../../srcsets/trebuchet-images"
import trebuchetVideo from "../../images/projects/trebuchet/trebuchet-video.mp4"

const ProjectSummary = () => (
  <Layout>
    <SEO title="Trebuchet" />
    <div className="project-summary pt-4" id="page-container">
      <div id="project-content-wrap">
        <div className="container p-5">
          <div className="row justify-content-center pt-5 pb-5">
            <div className="col-md-12 text-center">
              <h1>Trebuchet</h1>
            </div>
          </div>
          <div style={{ marginRight: "-5px", marginLeft: "-4px" }}><LightBox photos={photos}></LightBox></div>
          
          <div className="embed-responsive embed-responsive-16by9 mt-1">
          <video controls loop muted>
            <source src={trebuchetVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProjectSummary
