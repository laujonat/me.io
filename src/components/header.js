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
          padding: `0.250em`,
          fontSize: `1.5em`,
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
