import React from "react"

import Layout from "../components/project_layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="page-container">
      <div id="content-wrap">
        <div className="container p-5">
          <div className="row justify-content-center pt-5">
            <div className="col-md-12 text-center">
              <h1>Yonder Dynamics Arm</h1>
              <div className="mb-4 lead">
                The page you are looking for was not found.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
