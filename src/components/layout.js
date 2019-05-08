/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import SubHeader from "./subheader"
import Footer from "./footer"
import styles from "../styles/layout.module.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
            location
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          className={styles.contentWrap}
          style={{
            margin: `1em`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <div>{children}</div>
          <SubHeader
            subTitle={data.site.siteMetadata.subtitle}
            location={data.site.siteMetadata.location}
          />
        </div>
        <Footer className={styles.footer} />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
