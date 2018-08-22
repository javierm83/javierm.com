import React from 'react'
import Link from 'gatsby-link'

import embed from '../assets/img/embed.svg';
import pencil from '../assets/img/pencil.svg';
import tablet from '../assets/img/tablet.svg';
import profile from '../assets/img/profile.jpeg';

// TODO: move all inline styles to scss files

const IndexPage = () => (
    <div className="page page--blue-gradient l-full-height l-align-vertical">
        <div className="l-full-width">
            <div className="grid">
            
                <div className="grid__item one-third u-text-center">
                    <img className="u-margin-top u-margin-bottom" src={embed} alt="Code"/>
                    <h4 className="u-h4 u-color-white u-margin-top">Code</h4>
                    <p className="u-color-white">Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American.</p>
                </div>

                <div className="grid__item one-third u-text-center">
                    <img className="u-margin-top u-margin-bottom" src={pencil} alt="UX/UI"/>
                    <h4 className="u-h4 u-color-white u-margin-top">UX/UI</h4>
                    <p className="u-color-white">Do you believe that sldkkldas   sjjdjhhjs   sjjhdhjdsj js jsaj jashj shit? It actually says that in the little book that comes with it: the most popular gun in American.</p>
                </div>

                <div className="grid__item one-third u-text-center">
                    <img className="u-margin-top u-margin-bottom" style={{maxHeight: '30px'}} src={tablet} alt="Performance"/>
                    <h4 className="u-h4 u-color-white u-margin-top">Performance</h4>
                    <p className="u-color-white">Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American.</p>
                </div>

            </div>

            <hr style={{ borderBottom: '1px dashed rgba(255,253,243,0.3)', margin: '40px 0', opacity: '0.5'}} />

            <div className="grid">

                <div className="grid__item one-third u-text-center">
                    <img src={profile} />
                </div>

                <div className="grid__item two-thirds u-text-left">
                    <p className="u-color-white">Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. 
                    Like they're actually proud of that shit. Do you believe that shit? It actually says that in the little book.</p>
                    <p className="u-color-white">Do you believe that shit? It actually says that in the little book that comes with it: the most popular </p>               

                    <Link 
                        className="button button-primary u-color-blue u-margin-top" 
                        to="/contact-me/">
                        Contact me
                    </Link>
                </div>

            </div>
        </div>
    </div>
)

export default IndexPage
