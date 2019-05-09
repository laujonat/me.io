import PropTypes from "prop-types"
import React from "react"
import SocialIcons from "./social"

function Header({ siteTitle }) {
  return (
    <div>
      <div
        style={{
          // maxWidth: 960,
          padding: `0.75em`,
          fontSize: `2em`,
        }}
      >
        {siteTitle}
      </div>
      <SocialIcons />
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
