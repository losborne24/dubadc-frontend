import React from "react"

import TextContents from "../components/TextContents"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import "../stylesheets/scss/subheading.scoped.scss"
import "../stylesheets/scss/other.scoped.scss"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Other" />
    </Layout>
    <div className="header">
      <h5 className="sub-title">Other</h5>
    </div>
    <StaticQuery
      query={graphql`
        query {
          allStrapiOther {
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
            <TextContents data={data.allStrapiOther.edges[0].node} />
          </>
        )
      }}
    />
  </>
)

export default IndexPage
