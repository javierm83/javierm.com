import React from 'react'
import Link from 'gatsby-link'
import laptop from '../assets/img/laptop.svg';

const IndexPage = () => (
  <div className="jm-page l-full-height  l-align-vertical">
    <div className="l-full-width">
      <div className="grid grid--center grid--middle">

          <div className="grid__item one-third">
          <img src={laptop} alt="" />

          </div>
          <div className="grid__item two-thirds">
              <div className="u-margin-left">
                <h1 className="u-h1 u-color-white">Hello World!</h1>
                <h2 className="u-h2 u-color-white">My name is Javier Martinez, and I’m a Web Developer. <br/>I specialize in UX/UI development.</h2>
                <Link to="/page-2/">Go to page 2</Link>
              </div>
          </div>
      </div>
    </div>
  </div>
)

export default IndexPage
