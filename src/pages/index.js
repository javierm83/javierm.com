import React from 'react'
import Link from 'gatsby-link'
import laptop from '../assets/img/laptop.svg';
const style = { 'color': 'white' };
const IndexPage = () => (
  <div className="jm-page l-full-height  l-align-vertical">
    <div className="l-full-width">
      <div className="grid grid--center grid--middle">

          <div className="grid__item one-third">
          <img src={laptop} alt="" />

          </div>
          <div className="grid__item two-thirds">
              <div className="u-margin-left">
                <h1 className="u-h1 u-color-white">Under construction.</h1>
                <h2 className="u-h2 u-color-white">Come back soon :)</h2>
                <Link style={style} to="mailto:me@javierm.com">Email: me@javierm.com</Link>
              </div>
          </div>
      </div>
    </div>
  </div>
)

export default IndexPage
