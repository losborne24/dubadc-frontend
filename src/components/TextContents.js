import React from "react"
import PropTypes from "prop-types"

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
              <ReactMarkdown source={data.Contents} className="contents" />
            </Fade>
          </div>
          <div style={{ width: "200px" }}></div>
        </div>
      </div>
    </>
  )
}

Contents.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Contents
