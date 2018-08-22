import React from 'react';
import Link from 'gatsby-link';
import ContactForm from '../components/ContactForm';
import AnimatedSVG from '../components/AnimatedSVG';

import coffee from '../assets/img/coffee.svg';
import github from '../assets/img/github.png';
import gmail from '../assets/img/gmail.png';
import linkedin from '../assets/img/linkedin.png';

const ContactPage = () => (
    <div className="page page--light-grey-gradient l-full-height l-align-vertical">
        <div className="l-full-width">
            <div className="grid">

                <div className="grid__item one-half u-text-center">
                    <div className="box box--white u-margin-top">
                        <div className="form-container">
                            <h3 className="u-h3 u-color-dark u-margin-top u-margin-bottom">Send me a message</h3>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
                <div className="grid__item one-half u-text-center">

                    <div className="box box--white u-margin-top">
                        <h3 className="u-h3 u-color-dark u-margin-top u-margin-bottom">You can also find me here</h3>
                        <div className="grid">
                            <div className="grid__item one-third u-text-center u-margin-top u-margin-bottom">
                                <a target="_blank" href="https://github.com/javierm83">
                                    <img alt="Github" src={github}/>
                                </a>
                            </div>
                            <div className="grid__item one-third u-text-center u-margin-top u-margin-bottom">
                                <a href="mailto:me@javierm.com">
                                    <img alt="Gmail" src={gmail} style={{marginTop: '7px'}}/>
                                </a>
                            </div>
                            <div className="grid__item one-third u-text-center u-margin-top u-margin-bottom">
                                <a target="_blank" href="https://www.linkedin.com/in/javier-martinez-02b68b46/">
                                    <img alt="Linkedin" src={linkedin}/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="u-margin-top u-text-center">
                        <div style={{marginTop: '60px'}}>
                            <AnimatedSVG duration={80} svg={coffee} width={'120px'} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
)

export default ContactPage
