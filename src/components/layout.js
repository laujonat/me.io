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
              padding: `0 1rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <div>{children}</div>
            <span
              style={{
                color: "rgb(172, 115, 160)",
                float: "left",
              }}
            >
              <SubHeader subTitle={"Discord 🍿"} />
            </span>
            <span>
              <SubHeader subTitle={": telnetcookie#7354"} />
            </span>
            <SubHeader
              subTitle={data.site.siteMetadata.subtitle}
              location={data.site.siteMetadata.location}
            />
          </div>
          <Spacer />
          <Header
            style={{
              fontSize: "0.8em",
              marginBottom: "1em",
              backgroundColor: "green",
            }}
            siteTitle="current projects"
          />
          <Card
            title={"Leetcode Practice Tool"}
            link={"https://github.com/laujonat/Algos-In-JS"}
            description={
              "Node webserver template to set up a sandbox environment for interview practice problems.  Uses Webpack and Nodemon to watch for file changes to recompile in real-time. Generates a GraphQL schema from problem sets and frontend web GUI to display details about your implementation."
            }
          />
          <Card
            title={"Bash dotfiles with setup scripts and local history"}
            link={"https://github.com/laujonat/bash"}
            description={
              "Scripts to port my Bash environments between Unix-like environments."
            }
          />
          <Card
            title={"Browser emulated terminal compiled with ReactReasonML"}
            link={"https://github.com/laujonat/xterm-with-reason"}
            description={
              "Browser-based terminal emulator built using the xterm.js module. Features type-safe Javascript code from the OCaml toolchain, ReasonML."
            }
          />
          <Card
            title={"gitsbetter.com - Tech blog"}
            link={"https://gitsbetter.com"}
            description={
              "TDIL-type tutorials and blog posts on various Web development topics."
            }
          />
          <Spacer />
          <Header
            style={{
              fontSize: "0.8em",
              backgroundColor: "green",
              marginBottom: "1em",
            }}
            siteTitle="current employment"
          />
          <Card
            title={"Software Engineer (FE) @Facebook via Teksystems"}
            small={"Jun 2019 - present"}
            description={
              "A tool to for sandboxing practice problems.  Uses Webpack and Nodemon to watch for file changes to recompile in real-time. Generates a GraphQL schema from problem sets and frontend web GUI to display details about your implementation."
            }
          />
          <Card
            title={"Software Engineer @Sharespost"}
            small={"July 2018 - April 2019"}
            description={
              "Scripts to port my Bash environments between Unix-like environments."
            }
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
