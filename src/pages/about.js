import React from "react"

import Contents from "../components/contents"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import "../stylesheets/scss/subheading.scoped.scss"
import "../stylesheets/scss/about.scoped.scss"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="About" />
    </Layout>
    <div className="header">
      <h5 className="sub-title">About</h5>
    </div>
    <StaticQuery
      query={graphql`
        query {
          allStrapiAbout {
            edges {
              node {
                Contents {
                  id
                  Contents
                  ContentMedia {
                    id
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <Contents data={data.allStrapiAbout.edges[0].node.Contents} />
          </>
        )
      }}
    />
  </>
)

export default IndexPage
