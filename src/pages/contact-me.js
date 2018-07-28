import React from 'react';
import Link from 'gatsby-link';
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
    <div className="page page--light-grey-gradient l-full-height l-align-vertical">
        <div className="l-full-width">
            <div className="grid">
                
                <div className="grid__item one-whole u-text-center">
                    <h2 style={{marginTop: '60px'}} className="u-h2 u-color-dark u-margin-top u-margin-bottom">Contact</h2>
                </div>

                <div className="grid__item one-half u-text-center">
                    <div className="box box--white u-margin-top">
                        <div className="form-container">
                            <h3 className="u-h3 u-color-dark u-margin-top u-margin-bottom">Send me a message</h3>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
                <div className="grid__item one-half u-text-center">
                </div>

            </div>
        </div>
    </div>
)

export default ContactPage
