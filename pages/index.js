import React from 'react';

const hrefOutside = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const Page = () => {
  return (
    <main>
      <h1 className="color">hi people!</h1>
      <h3>
        my name is <span className="color">Romello Goodman</span>.
      </h3>
      <a href="https://garnet.website" title="Go to garnet." {...hrefOutside}>
        <h3>garnet.website</h3>
      </a>
      <a
        href="https://github.com/romellogoodman"
        title="Go to github."
        {...hrefOutside}
      >
        <h3>github</h3>
      </a>
      <div />
      <h3 className="color">around the web</h3>
      <ul>
        <li>
          <a
            href="https://increment.com/remote/code-is-sourdough"
            title="Go to Increment article"
            {...hrefOutside}
          >
            <p>Code is sourdough</p>
          </a>
        </li>
        <li>
          <a
            href="https://increment.com/software-architecture/a-monorepo-renaissance"
            title="Go to Increment article"
            {...hrefOutside}
          >
            <p>A monorepo renaissance</p>
          </a>
        </li>
        <li>
          <a
            href="https://open.nytimes.com/what-if-we-used-images-to-navigate-new-york-times-content-5a6d87ab3688"
            title="Go to The Times Open article"
            {...hrefOutside}
          >
            <p>What If We Used Images to Navigate New York Times Content?</p>
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Page;
