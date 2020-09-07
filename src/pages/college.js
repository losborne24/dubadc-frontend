import React from "react"

import TextContents from "../components/TextContents"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import "../stylesheets/scss/subheading.scoped.scss"
import "../stylesheets/scss/college.scoped.scss"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="College" />
    </Layout>
    <div className="header">
      <h5 className="sub-title">College</h5>
    </div>
    <StaticQuery
      query={graphql`
        query {
          allStrapiCollege {
            edges {
              node {
                Contents
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <TextContents data={data.allStrapiCollege.edges[0].node} />
          </>
        )
      }}
    />
  </>
)

export default IndexPage
