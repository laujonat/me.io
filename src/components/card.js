import React from "react"
import styles from "../styles/card.module.css"
import SubHeader from "./subheader"
function Card({ title, description, link, children }) {
  return (
    <div className={styles.wrapper}>
      <a href={link}>
        <SubHeader subTitle={title} />
      </a>
      <div className={styles.wrapper}>
        <p>{description}</p>
      </div>
      {children}
    </div>
  )
}

export default Card
