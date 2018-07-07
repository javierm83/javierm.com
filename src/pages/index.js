import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="l-full-width">
    <div className="grid grid--center grid--full">

        <div className="grid__item one-third">
        1

        </div>
        <div className="grid__item two-thirds">
            <h1 className="u-h1">Hello world!</h1>
            <h2 className="u-h2">My name is Javier Martinez, and I’m a Web Developer. <br/>I specialize in UX/UI development.</h2>
            <Link to="/page-2/">Go to page 2</Link>
        </div>
    </div>
  </div>
)

export default IndexPage
