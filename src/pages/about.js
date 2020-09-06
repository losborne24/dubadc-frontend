import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="About" />
    </Layout>
    <div className="header">
      <h5 className="sub-title">About</h5>
    </div>
  </>
)

export default IndexPage
