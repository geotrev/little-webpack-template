import React, { Component } from 'react'

/*
** NOTE: This is a hack to mimic page navigation.
** Simply import as a component like you would anywhere.
*/

export default class ScrollUpOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}
