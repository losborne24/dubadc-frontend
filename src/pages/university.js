import React from "react"

import Contents from "../components/contents"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import "../stylesheets/scss/subheading.scoped.scss"
import "../stylesheets/scss/university.scoped.scss"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="University" />
    </Layout>
    <div className="header">
      <h5 className="sub-title">University</h5>
    </div>
    <StaticQuery
      query={graphql`
        query {
          allStrapiUniversity {
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
                Committee {
                  id
                  Name
                  Position
                  ProfilePic {
                    id
                    publicURL
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
            <div className="profiles-container"></div>
            <Contents data={data.allStrapiUniversity.edges[0].node.Contents} />
          </>
        )
      }}
    />
  </>
)

export default IndexPage
