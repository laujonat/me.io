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
import Spacer from "./spacer"
import styles from "../styles/layout.module.css"
import SocialIcons from "./social"
import Card from "./card"
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
        <div className={styles.inner}>
          <Header siteTitle={data.site.siteMetadata.title}>
            <SocialIcons />
          </Header>
          <div
            style={{
              margin: `1em`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <div>{children}</div>
            <SubHeader subTitle={"Discord 🍿: telnetcookie#7354"} />
            <SubHeader
              subTitle={data.site.siteMetadata.subtitle}
              location={data.site.siteMetadata.location}
            />
          </div>
          <Spacer />
          <Header style={{ fontSize: "0.8em" }} siteTitle="recent projects" />
          <Card
            title={"Leetcode Practice Tool 🔗"}
            link={"https://github.com/laujonat/Algos-In-JS"}
            description={
              "Online code sandboxes such as repl.it & Leetcode is not only slow, but provide limited in debugging features. In order to test solutions that require class instances, such as a Node class, becomes time consuming having to setup the data structures involved with Tree/Linked List-type problems.  So I made a repo for practicing your algorithms.  It uses Webpack and Nodemon to watch and recompile file changes, generates a file dependency graph from a GraphQL schema, and a frontend web GUI to display details about your implementation."
            }
          />
          <Card
            title={"Bash dotfiles with setup scripts and local history 🔗"}
            link={"https://github.com/laujonat/bash"}
            description={
              "Open-sourced dotfile repos are awesome, but many of the popular ones come with a surplus of tooling I do not regularly use. Pulling various sources around the web, I set up some setup scripts of my own that I can port my environment dotfiles across various Unix-like environments."
            }
          />
          <Card
            title={"Browser emulated terminal compiled with ReactReasonML 🔗"}
            link={"https://github.com/laujonat/xterm-with-reason"}
            description={
              "A tool to emulate your local terminal environment into the browser. I plan to integrate this with the Leetcode practice tool, providing an all-in-one user interface for practicing algorithms directly from the browser."
            }
          />
          <Card
            title={"gitsbetter.com - Tech blog 🔗"}
            link={"https://gitsbetter.com"}
            description={
              "I write blog posts on web development and coding tutorials."
            }
          />
          <Header style={{ fontSize: "0.8em" }} siteTitle="recent experience" />
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
