/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Image from "./image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div className="nav">
          <Link to="/">
            <Image />
          </Link>
          <div className="nav-container">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news/">News</Link>
              </li>
              <li>
                <Link to="/university/">University</Link>
              </li>
              <li>
                <Link to="/college/">College</Link>
              </li>
              <li>
                <Link to="/development/">Development</Link>
              </li>
              <li>
                <Link to="/other/">Other</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="float-sm">
          <div className="fl-fl float-fb">
            <a
              href="https://www.facebook.com/DurhamUniversityBadmintonClub/"
              target="_blank"
            >
              <p>Like DUBadC!</p>
              <i className="fa fa-facebook fa-2x"></i>
            </a>
          </div>
          <div className="fl-fl float-tw">
            <a href="https://twitter.com/dubadc?lang=en/" target="_blank">
              <p>Follow DUBadC!</p>
              <i className="fa fa-twitter fa-2x"></i>
            </a>
          </div>
          <div className="fl-fl float-ig">
            <a
              href="https://www.instagram.com/durham_badminton/"
              target="_blank"
            >
              <p>Follow DUBADC!</p>
              <i className="fa fa-instagram fa-2x"></i>
            </a>
          </div>
          <div className="fl-fl float-fbTD">
            <a href="https://www.facebook.com/teamdurham/" target="_blank">
              <p>Team Durham</p>
              <i className="fa fa-facebook fa-2x"></i>
            </a>
          </div>
          <div className="fl-fl float-twTD">
            <a href="https://twitter.com/teamdurham?lang=en/" target="_blank">
              <p>Team Durham</p>
              <i className="fa fa-twitter fa-2x"></i>
            </a>
          </div>
          <div className="fl-fl float-igTD">
            <a href="https://www.instagram.com/team.durham/" target="_blank">
              <p>Team Durham</p>
              <i className="fa fa-instagram fa-2x"></i>
            </a>
          </div>
          <div className="fl-fl float-glTD">
            <a href="https://www.teamdurham.com/" target="_blank">
              <p>Team Durham</p>
              <i className="fa fa-globe fa-2x"></i>
            </a>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
