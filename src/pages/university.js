import React from "react"
import Fade from "react-reveal/Fade"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactPlayer from "react-player"
import UniversityStyles from "../stylesheets/css/university.module.css"
import { StaticQuery } from "gatsby"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="University" />
    </Layout>
    <div class="header">
      <h5 class="sub-title">University</h5>
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
        return (
          <>
            <div className={UniversityStyles.container} id="container">
              <div className={UniversityStyles.innerContainer}>
                <Fade left casade>
                  <ReactMarkdown
                    id="contents"
                    className={UniversityStyles.contents}
                    source={data.allStrapiUniversity.edges[0].node.Contents}
                  />
                </Fade>
                <Fade bottom>
                  <div className={UniversityStyles.video}>
                    <div className={UniversityStyles.vid1}>
                      <div className={UniversityStyles.overlay1}></div>
                      <ReactPlayer
                        className={UniversityStyles.contentVideo1}
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
                    <div className={UniversityStyles.vid2}>
                      <div className={UniversityStyles.overlay2}></div>
                      <ReactPlayer
                        className={UniversityStyles.contentVideo2}
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
