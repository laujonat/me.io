import React from "react"
import Box from "../components/box"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`, `portfolio`]}
      />
    </Layout>
  )
}

export default IndexPage
