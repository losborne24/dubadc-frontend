import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import TextContents from "../components/TextContents"

import SEO from "../components/seo"
import ReactPlayer from "react-player"
import "../stylesheets/scss/home.scoped.scss"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
    </Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiHome {
            edges {
              node {
                Contents
                PromoVideo {
                  id
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <div>
              <ReactPlayer
                className="promo-video"
                playing={true}
                loop={true}
                muted={true}
                playsinline={true}
                width="100%"
                height="auto"
                url={data.allStrapiHome.edges[0].node.PromoVideo.publicURL}
              />
              <div className="promo-text">
                <h1>
                  <b>
                    DURHAM UNIVERSITY
                    <br /> BADMINTON CLUB
                  </b>
                </h1>
              </div>
              <div className="scroll-container">
                <a className="span-container" href="#container">
                  <span className="span-1"></span>
                  <span className="span-2"></span>
                </a>
              </div>
            </div>
            <div className="contents-container">
              <TextContents data={data.allStrapiHome.edges[0].node} />
            </div>
          </>
        )
      }}
    />
  </>
)

export default IndexPage
