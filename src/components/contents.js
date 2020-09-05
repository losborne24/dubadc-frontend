import React from "react"
import PropTypes from "prop-types"

import ReactPlayer from "react-player"
import Fade from "react-reveal/Fade"
import ReactMarkdown from "react-markdown"
import "../stylesheets/scss/contents.scoped.scss"

const Contents = ({ data }) => {
  return (
    <>
      <div className="container" id="container">
        <div className="inner-container">
          <Fade left casade>
            <ReactMarkdown
              id="contents"
              className="contents"
              source={data.Contents}
            />
          </Fade>
          <Fade bottom>
            <div className="video">
              <div className="vid-1">
                <div className="overlay-1"></div>
                <ReactPlayer
                  className="content-video-1"
                  playing={true}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  width="224px"
                  height="400px"
                  url={data.ContentMedia1.publicURL}
                />
              </div>
              <div className="vid-2">
                <div className="overlay-2"></div>
                <ReactPlayer
                  className="content-video-2"
                  playing={true}
                  loop={true}
                  muted={true}
                  playsinline={true}
                  width="224px"
                  height="400px"
                  url={data.ContentMedia2.publicURL}
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

Contents.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Contents
