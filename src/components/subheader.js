import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/subheader.module.css"

function SubHeader({ subTitle, location }) {
  return (
    <div className={styles.subheaderContainer}>
      <div className={styles.subtitle}>{subTitle}</div>
      {location && <div className={styles.location}>{location}</div>}
    </div>
  )
}

SubHeader.propTypes = {
  subTitle: PropTypes.string,
}

SubHeader.defaultProps = {
  subTitle: ``,
}

export default SubHeader
