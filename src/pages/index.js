import React from "react"
import Fade from "react-reveal/Fade"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactPlayer from "react-player"
import ReactMarkdown from "react-markdown"
import HomeStyles from "../stylesheets/css/home.module.css"
import "../stylesheets/css/style.css"
import "../stylesheets/css/subheadings.css"

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
              className={HomeStyles.promo}
              playing={true}
              loop={true}
              muted={true}
              playsinline={true}
              width="100vw"
              height="auto"
              url={data.allStrapiHome.edges[0].node.PromoVideo.publicURL}
            />

            <div className={HomeStyles.promoContainer}>
              <h1 className={HomeStyles.promoText}>
                <b>
                  DURHAM UNIVERSITY
                  <br /> BADMINTON CLUB
                </b>
              </h1>
            </div>
            <a className={HomeStyles.scroll} href="#container">
              <span className={HomeStyles.span1}></span>
              <span className={HomeStyles.span2}></span>
            </a>
            <div className={HomeStyles.container} id="container">
              <div className={HomeStyles.innerContainer}>
                <Fade left casade>
                  <ReactMarkdown
                    id="contents"
                    className={HomeStyles.contents}
                    source={data.allStrapiHome.edges[0].node.Contents}
                  />
                </Fade>
                <Fade bottom>
                  <div className={HomeStyles.video}>
                    <div className={HomeStyles.vid1}>
                      <div className={HomeStyles.overlay1}></div>
                      <ReactPlayer
                        className={HomeStyles.contentVideo1}
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
                    <div className={HomeStyles.vid2}>
                      <div className={HomeStyles.overlay2}></div>
                      <ReactPlayer
                        className={HomeStyles.contentVideo2}
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
