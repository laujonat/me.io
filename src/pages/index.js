import React, { useEffect } from "react"
import Box from "../components/box";
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
 return ( 
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`]} 
      />
      <h1>adlkja</h1>
     <Box />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image /> */}
      </div>
    </Layout>
  )
}

export default IndexPage
