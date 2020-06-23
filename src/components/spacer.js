import React from "react"
import styles from "../styles/layout.module.css"
function Spacer() {
  return (
    <div className={styles.arrows}>
      <div className={styles.arrow} />
      <div className={styles.arrow} />
    </div>
  )
}

export default Spacer
