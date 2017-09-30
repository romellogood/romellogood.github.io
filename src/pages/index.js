import React from 'react';

const IndexPage = () => (
  <div>
    <h1 className="color">hi people!</h1>
    <h3>
      my name is <span className="color">Romello Goodman</span>.
    </h3>
    <a
      href={__PATH_PREFIX__ + '/resume.pdf'}
      target="_blank"
      title="View/Download my resume."
    >
      <h3>resume</h3>
    </a>
    <a
      href="https://github.com/romellogood"
      target="_blank"
      title="Go to github."
    >
      <h3>github</h3>
    </a>
  </div>
);

export default IndexPage;
