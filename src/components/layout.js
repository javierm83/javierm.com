import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header'	

import '../styles/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hello world!"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
    <Header />
    {children}
    </div>
  </div>
)

export default TemplateWrapper;
