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
                Contents
                ContentMedia1 {
                  id
                  publicURL
                }
                ContentMedia2 {
                  id
                  publicURL
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
        return <Contents data={data.allStrapiUniversity.edges[0].node} />
      }}
    />
  </>
)

export default IndexPage
