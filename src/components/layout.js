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
          <Header
            style={{ padding: "1em" }}
            siteTitle={data.site.siteMetadata.title}
          >
            <SocialIcons />
          </Header>
          <div
            style={{
              margin: `1em`,
              maxWidth: 960,
              paddingTop: 0,
            }}
          >
            <div>{children}</div>
            <SubHeader
              subTitle={data.site.siteMetadata.subtitle}
              location={data.site.siteMetadata.location}
            />
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
          </div>
          <Spacer />
          <Header
            style={{
              fontSize: "0.8em",
              margin: "auto",
            }}
            siteTitle="What am I making?"
          />
          <Card
            title={"Leetcode Practice Tool"}
            small={
              "node/express, flow-types, html/css, vanilla js, webpack, graphql, mongodb"
            }
            link={"https://github.com/laujonat/Algos-In-JS"}
            description={
              "Node webserver template to set up a sandbox environment for interview practice problems.  Uses Webpack and Nodemon to watch for file changes to recompile in real-time. Generates a GraphQL schema from problem sets and frontend web GUI to display details about your implementation."
            }
          />
          <Card
            title={"Bash dotfiles with setup scripts and local history"}
            small={"shell/bash script, vim, python"}
            link={"https://github.com/laujonat/bash"}
            description={
              "Scripts to port my Bash environments between Unix-like environments."
            }
          />
          <Card
            title={"Browser emulated terminal compiled from React ReasonML"}
            small={"react/javascript, reasonml, html/css"}
            link={"https://github.com/laujonat/xterm-with-reason"}
            description={
              "Browser-based terminal emulator built using the xterm.js module. Features type-safe Javascript code from the OCaml toolchain, ReasonML."
            }
          />
          <Card
            title={"gitsbetter.com - Web development blog"}
            small={"gatsby, node, react/javascript, html/css, scss, graphql"}
            link={"https://gitsbetter.com"}
            description={
              "TDIL-type tutorials and blog posts on various Web development topics."
            }
          />
          <Spacer />
          <Header
            style={{
              margin: `auto`,
              fontSize: "0.8em",
            }}
            siteTitle="Current Employment"
          />
          <Card
            title={"Software Engineer @Facebook via Teksystems"}
            small={"Jun 2019 - Present 2020"}
            description={
              "At Facebook, I am building tools that enable advertisers on Facebook to deliver personalized content to their audiences. Taking part in the joint mission between Scaled Solutions Engineering and partner orgs of Facebook business, I design and develop interfaces with rich user-experiences that support advertisers on various Facebook business websites. Some highlights:"
            }
          />
          <ul>
            <li>
              Developing the frontend of Content Portal, a tool enabling
              Marketing Experts to create and manage advertiser recommendations.
              (Scaled Solutions & Ads Front-End)
            </li>
            <li>
              Created a framework for email templates that allow FBB Marketing
              team to easily build out email templates that are supported by all
              major email clients.
            </li>
            <li>
              Developed and maintained UI components supporting the Facebook CMS
              framework enabling CMS Experts to facilitate the creation and
              modification of internal and external content for Faceboook
              business websites.
            </li>
            <li>Tech Stack: Javascript, React, Flow, Jest, XHP, Hack/PHP</li>
          </ul>
          <Card
            title={"Software Engineer @Sharespost (Merged with Forge Global)"}
            small={"July 2018 - April 2019"}
            description={
              "I was previously a full-stack web engineer at Sharespost, a fintech company in San Francisco, California. I was responsible for developing and maintaining tools that automated private security transactions.  I worked in cross-functional teams between operations and compliance, taking initiatives in the migration of legacy code into a component-based frontend on the main Sharespost platform. "
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
