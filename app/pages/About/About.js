import React from "react"
import PropTypes from "prop-types"
import ScrollUpOnMount from "app/helpers/ScrollUpOnMount"

export default function About({ message }) {
  return (
    <div id="about">
      <ScrollUpOnMount />
      <span role="img" aria-label="thumbs-up emoji" className="hopping emoji">
        👍
      </span>
      <h1>{"You found another page!"}</h1>
      <p>{message}</p>
    </div>
  )
}

About.propTypes = {
  message: PropTypes.string,
}
