import React from "react"
import { useEffect, useState } from "react"
import styles from "../styles/card.module.css"
import SubHeader from "./subheader"
function Card({ title, description, link, children, small, list }) {
  const [ishover, setIsHover] = useState(false)
  useEffect(() => {
    setIsHover(small)
  }, [])

  return (
    <div
      onMouseEnter={() => setIsHover(ishover ? false : true)}
      onMouseLeave={() => setIsHover(ishover)}
      className={styles.wrapper}
    >
      <div className={!small && styles.item}>
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
