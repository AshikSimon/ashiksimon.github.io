import { Document } from "react-pdf/dist/esm/entry.webpack"
import { Page, StyleSheet } from "react-pdf"
import resume from "../static/ashik_resume.pdf"
import Layout from "../components/projects/project_layout"
import SEO from "../components/seo"
import React, { PureComponent } from "react"
import throttle from "lodash.throttle"

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { width: null }
  }

  componentDidMount() {
    this.setDivSize()
    window.addEventListener("resize", throttle(this.setDivSize, 500))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", throttle(this.setDivSize, 500))
  }

  setDivSize = () => {
    this.setState({ width: this.pdfWrapper.getBoundingClientRect().width })
  }

  render() {
    return (
      <Layout>
        <SEO title="Resume" />
        <div className="project-summary pt-5 pb-4">
          <div className="container">
            <div className="mt-5 d-flex justify-content-center col-xs-12">
              <div
                id="pdfWrapper"
                style={{ width: "90vw" }}
                ref={ref => (this.pdfWrapper = ref)}
              >
                <PdfComponent wrapperDivSize={this.state.width} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

class PdfComponent extends PureComponent {
  /*
  state = { numPages: null, pageNumber: 1 }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: (state.pageNumber = 1) }))
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: (state.pageNumber = 2) }))
*/
  render() {
    return (
      <div>
        <Document file={resume} renderMode="svg">
          <Page pageIndex={0} width={this.props.wrapperDivSize} />
          <div className="p-1"></div>
          {/*<Page pageIndex={1} width={this.props.wrapperDivSize} /> */}
        </Document>
      </div>
    )
  }
}

/*
        <nav>
          <button className="btn m-2" onClick={this.goToPrevPage}>
            Page 1
          </button>
          <button className="btn m-2" onClick={this.goToNextPage}>
            Page 2
          </button>
        </nav>
        */

export default App
