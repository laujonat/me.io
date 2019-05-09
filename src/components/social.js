import React from "react"
import { SocialIcon } from "react-social-icons"
import styles from "../styles/social.module.css"

const mediaUrl = [
  "https://github.com/laujonat",
  "https://linkedin.com/in/jonathanhlau",
  "https://twitter.com/laujonat",
  "https://medium.com/@jonhlau28",
  "https://www.flickr.com/photos/jjlauu/",
  "https://www.dropbox.com/s/eyin8vo76j733hy/resume2019.pdf?dl=0",
]

function SocialIcons() {
  return (
    <div className={styles.wrapper}>
      <SocialIcon url={mediaUrl[0]} style={{ width: `30px`, height: `30px` }} />
      <SocialIcon url={mediaUrl[1]} style={{ width: `30px`, height: `30px` }} />
      <SocialIcon url={mediaUrl[2]} style={{ width: `30px`, height: `30px` }} />
      <SocialIcon url={mediaUrl[3]} style={{ width: `30px`, height: `30px` }} />
      <SocialIcon url={mediaUrl[4]} style={{ width: `30px`, height: `30px` }} />
      <SocialIcon url={mediaUrl[5]} style={{ width: `30px`, height: `30px` }} />
    </div>
  )
}

export default SocialIcons
