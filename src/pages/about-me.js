import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import embed from '../assets/img/embed.svg';
import pencil from '../assets/img/pencil.svg';
import tablet from '../assets/img/tablet.svg';
import profile from '../assets/img/profile.jpeg';

// TODO: move all inline styles to scss files

const IndexPage = () => (
    <Layout>
    <div className="page page--blue-gradient l-align-horizontal">
        <div className="l-full-width">
            <div className="grid">

                <div className="grid__item desk--one-third u-text-center">
                    <img className="u-margin-top u-margin-bottom" src={embed} alt="Code"/>
                    <h4 className="u-h4 u-color-white u-margin-top">Code</h4>
                    <p className="u-color-white u-text-left">
                        I love creating and building awesome products. 
                        I focus on writing clean, elegant and maintainable code.
                        My favourite language is <b>Javascript</b>.
                    </p>
                </div>

                <div className="grid__item desk--one-third u-text-center">
                    <img className="u-margin-top u-margin-bottom" src={pencil} alt="UX/UI"/>
                    <h4 className="u-h4 u-color-white u-margin-top">UX/UI</h4>
                    <p className="u-color-white u-text-left">
                        I enjoy bringing beautiful, simple and functional user experiences to life.
                        I'm passionate about clean design patterns and thoughtful interactions. 
                    </p>
                </div> 

                <div className="grid__item desk--one-third u-text-center">
                    <img className="u-margin-top u-margin-bottom" style={{maxHeight: '30px'}} src={tablet} alt="Performance"/>
                    <h4 className="u-h4 u-color-white u-margin-top">Performance</h4>
                    <p className="u-color-white u-text-left">
                        One of my main goals is building fast and performant web applications.
                        For this I use best practices and modern techniques and tools.
                    </p>
                </div>

            </div>

            <hr style={{ borderBottom: '1px dashed rgba(255,253,243,0.3)', margin: '40px 0', opacity: '0.5'}} />

            <div className="grid">

                <div className="grid__item one-third u-text-center">
                    <img alt="Profile" src={profile} />
                </div>

                <div className="grid__item two-thirds u-text-left">
                    <p className="u-color-white">
                        I'm a Front End Developer from Argentina.<br/>
                        Since 2013 I've made Auckland, New Zealand my new home.<br/>           
                        I love what I do, I'm always motivated and have the desire to learn more.
                    </p>               

                    <Link 
                        className="button button-primary u-color-blue u-margin-top" 
                        to="/contact-me/">
                        Contact me
                    </Link>
                </div>

            </div>
        </div>
    </div>
    </Layout>
)

export default IndexPage
