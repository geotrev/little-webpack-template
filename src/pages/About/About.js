import React from "react"
import PropTypes from "prop-types"
import ScrollUpOnMount from "helpers/ScrollUpOnMount"

export default function About({ message }) {
  return (
    <div id="about">
      <ScrollUpOnMount />
      <div className="hopping emoji">👍</div>
      <h1>You found another page!</h1>
      <p>{message}</p>
    </div>
  )
}

About.propTypes = {
  message: PropTypes.string,
}
