import React from "react"
import styles from "../styles/footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      © {new Date().getFullYear()}, Developed with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  )
}

export default Footer
