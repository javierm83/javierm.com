import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import laptop from '../assets/img/laptop.svg';
import AnimatedSVG from '../components/AnimatedSVG';

const IndexPage = () => (
    <Layout>
    <div className="page page--pink-gradient l-full-height l-align-vertical">
        <div className="l-full-width">
            <div className="grid">

                <div className="grid__item desk--one-third u-text-center">
                    <AnimatedSVG svg={laptop} width={'260px'} duration={100} />
                </div>

                <div className="grid__item desk--two-thirds">
                    <div className="hero__text-container">
                        <h1 className="u-h1 u-color-white">Hello World!</h1>
                        <h2 className="u-h2 u-color-white">My name is Javier Martinez, and I’m a Web Developer. <br/>I specialize in UX/UI development.</h2>
                        <br/>
                        <Link 
                            className="button button-primary u-color-pink u-margin-right" 
                            to="/about-me/">
                            About
                        </Link>
                        <Link 
                            className="button button-primary u-color-pink" 
                            to="/contact-me/">
                            Contact me
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </Layout>
)

export default IndexPage
