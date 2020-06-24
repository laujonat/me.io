import React from "react"
import { useEffect, useState } from "react"
import styles from "../styles/card.module.css"
import SubHeader from "./subheader"
function Card({ title, description, link, children, small }) {
  const [ishover, setIsHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHover(ishover)}
      onMouseLeave={() => setIsHover(false)}
      className={styles.wrapper}
    >
      <div className={!small && ishover && styles.item}>
        <a href={link} className={styles.link}>
          <SubHeader subTitle={title} />
          {small && <div className={styles.small}>{small}</div>}
        </a>
      </div>
      <div className={styles.wrapper}>
        <span>
          <p>{description}</p>
        </span>
        {children}
      </div>
    </div>
  )
}

export default Card
