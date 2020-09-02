import React from "react"
import Fade from "react-reveal/Fade"
import { StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactPlayer from "react-player"
import ReactMarkdown from "react-markdown"
import "../stylesheets/css/home.css"

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
                ContentMedia1 {
                  publicURL
                }
                ContentMedia2 {
                  publicURL
                }
                PromoVideo {
                  publicURL
                }
                Contents
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <ReactPlayer
              id="promo"
              playing={true}
              loop={true}
              muted={true}
              playsinline={true}
              width="100vw"
              height="auto"
              url={data.allStrapiHome.edges[0].node.PromoVideo.publicURL}
            />

            <div className="promo-container">
              <h1 className="promo-text">
                <b>
                  DURHAM UNIVERSITY
                  <br /> BADMINTON CLUB
                </b>
              </h1>
            </div>
            <a id="scroll" href="#container">
              <span id="span-1"></span>
              <span id="span-2"></span>
            </a>
            <div id="container">
              <div className="inner-container">
                <Fade left casade>
                  <ReactMarkdown
                    id="content"
                    source={data.allStrapiHome.edges[0].node.Contents}
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
                          data.allStrapiHome.edges[0].node.ContentMedia1
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
                          data.allStrapiHome.edges[0].node.ContentMedia2
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
