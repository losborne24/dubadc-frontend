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
          <div className="contents-container">
            <Fade left casade>
              <ReactMarkdown className="contents" source={data.Contents} />
            </Fade>
          </div>
          <Fade bottom>
            <div className="media-container">
              {data.ContentMedia.map(media => {
                return (
                  <div className="media" key={media.id}>
                    <div className="overlay"></div>
                    <ReactPlayer
                      className="content-video"
                      playing={true}
                      loop={true}
                      muted={true}
                      playsinline={true}
                      width="224px"
                      height="400px"
                      url={media.url}
                    />
                  </div>
                )
              })}
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
