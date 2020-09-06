import React from "react"

import Contents from "../components/contents"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import "../stylesheets/scss/subheading.scoped.scss"
import "../stylesheets/scss/university.scoped.scss"
import ReactCardFlip from "react-card-flip"
import Img from "gatsby-image"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFlipped: false,
    }
  }
  flip = () => {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }
  render() {
    return (
      <div
        className="card-container"
        role="flip"
        onMouseEnter={this.flip}
        onMouseLeave={this.flip}
      >
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <Test member={this.props.member} />
          <Test2 member={this.props.member} />
        </ReactCardFlip>
      </div>
    )
  }
}
const Test = props => {
  return (
    <div className="front">
      <div className="text-container">
        <div className="name">{props.member.Name}</div>
        <div className="position">{props.member.Position}</div>
      </div>
    </div>
  )
}

const Test2 = props => {
  return (
    <div className="back">
      <div className="image-container">
        <Img
          fluid={props.member.ProfilePic.childImageSharp.fluid}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    </div>
  )
}
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
                    childImageSharp {
                      fluid(maxWidth: 250, maxHeight: 250) {
                        ...GatsbyImageSharpFluid
                      }
                    }
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
            <div className="profile-container">
              <div className="inner-profile-container">
                {data.allStrapiUniversity.edges[0].node.Committee.map(
                  member => (
                    <App key={member.id} member={member} />
                  )
                )}
              </div>
            </div>
            <Contents data={data.allStrapiUniversity.edges[0].node.Contents} />
          </>
        )
      }}
    />
  </>
)

export default IndexPage
