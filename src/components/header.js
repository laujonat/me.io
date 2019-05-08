import PropTypes from "prop-types"
import React from "react"

function Header({ siteTitle }) {
  return (
    <div>
      <div
        style={{
          maxWidth: 960,
          padding: `1em`
        }}
      >
        {siteTitle}
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
