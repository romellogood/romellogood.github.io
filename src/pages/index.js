import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <h1 className="color">hi people!</h1>
    <h3>
      my name is <span className="color">Romello Goodman</span>.
    </h3>
    <a
      href="https://github.com/romellogoodman"
      target="_blank"
      rel="noopener noreferrer"
      title="Go to github."
    >
      <h3>github</h3>
    </a>
  </Layout>
);

export default IndexPage;
