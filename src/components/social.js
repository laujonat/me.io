import React from "react"
import styles from "../styles/social.module.css"

const mediaUrl = [
  "https://github.com/laujonat",
  "https://linkedin.com/in/jonathanhlau",
  "https://twitter.com/laujonat",
  "https://medium.com/@jonhlau28",
  "https://gitsbetter.com",
]

function SocialIcons() {
  return (
    <div className={styles.wrapper}>
      <a href={mediaUrl[4]}>Dev Blog</a>
      <a href={mediaUrl[0]}>Github</a>
      <a href={mediaUrl[1]}>Linkedin</a>
      <a href={mediaUrl[3]}>Medium</a>
    </div>
  )
}

export default SocialIcons
