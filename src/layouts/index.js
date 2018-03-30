import React from 'react'
import Link from 'gatsby-link'
import '../assets/scss/main.scss'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func
}

export default Template
