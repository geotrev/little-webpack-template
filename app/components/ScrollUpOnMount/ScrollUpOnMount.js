import React from "react"

/*
 * NOTE: This is a hack to mimic page navigation.
 *       Simply import as a component like you would anywhere,
 *       and the page will auto-scroll to the top like a "new" page
 */

export default class ScrollUpOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}
