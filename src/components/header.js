import PropTypes from "prop-types"
import React from "react"
import SocialIcons from "./social"

function Header({ siteTitle, children, style }) {
  return (
    <div style={style}>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: `0.75em`,
          fontSize: `2em`,
        }}
      >
        {siteTitle}
        {children}
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
