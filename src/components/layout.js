import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header'	

import '../styles/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hello world!"
      meta={[
        { name: 'description', content: 'Front-End Development, Javacript and User Experience in Auckland, New Zealand' },
        { name: 'keywords', content: 'Front-End Developer, UX, Web Developer, Javascript, CSS, React, Auckland, New Zealand,' },
        { name: 'google-site-verification', content: 'sluw-24PBdIy_cSEdzC6JOJv2El823rZFkP_aTRfqwk' },
      ]}
    />
    <div>
    <Header />
    {children}
    </div>
  </div>
)

export default TemplateWrapper;
