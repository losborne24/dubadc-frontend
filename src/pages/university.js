import React from "react"
import Fade from "react-reveal/Fade"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactPlayer from "react-player"

import { StaticQuery } from "gatsby"
import "../stylesheets/css/university.css"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="University" />
    </Layout>
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
        return (
          <>
            <div id="container">
              <div className="inner-container">
                <Fade left casade>
                  <ReactMarkdown
                    id="content"
                    source={data.allStrapiUniversity.edges[0].node.Contents}
                  />
                </Fade>
                <Fade bottom>
                  <div id="videos">
                    <div className="vid-1">
                      <div className="overlay-1"></div>
                      <ReactPlayer
                        id="content-video-1"
                        playing={true}
                        loop={true}
                        muted={true}
                        playsinline={true}
                        width="224px"
                        height="400px"
                        url={
                          data.allStrapiUniversity.edges[0].node.ContentMedia1
                            .publicURL
                        }
                      />
                    </div>
                    <div className="vid-2">
                      <div className="overlay-2"></div>
                      <ReactPlayer
                        id="content-video-2"
                        playing={true}
                        loop={true}
                        muted={true}
                        playsinline={true}
                        width="224px"
                        height="400px"
                        url={
                          data.allStrapiUniversity.edges[0].node.ContentMedia2
                            .publicURL
                        }
                      />
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </>
        )
      }}
    />
  </>
)

export default IndexPage
