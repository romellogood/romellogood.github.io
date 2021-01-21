import React from 'react';

const hrefOutside = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const Page = () => {
  return (
    <main>
      <h1>hi!</h1>
      <h3>
        my name is Romello (<span className="color"> mello </span>) Goodman.
      </h3>
      <p>
        I am a creative technologist primarily working with web technologies. By
        day, I work as a software engineer at The New York Times. By night, I
        use a number of different tools to explore the intersection of
        creativity and code.
      </p>
      <a
        href="https://observablehq.com/@romellogoodman/home"
        title="Go to Observable."
        {...hrefOutside}
      >
        <h3>coding blog</h3>
      </a>
      <h3>around the web</h3>
      <ul>
        <li>
          <a
            href="https://twitter.com/mellogood"
            title="Go to Twitter."
            {...hrefOutside}
          >
            <p>twitter</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mellogood.codes"
            title="Go to Instagram."
            {...hrefOutside}
          >
            <p>insta</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.com/romellogoodman/romellogoodmancomblog/"
            title="Go to Pinterest."
            {...hrefOutside}
          >
            <p>pinterest</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/romellogoodman"
            title="Go to Github."
            {...hrefOutside}
          >
            <p>github</p>
          </a>
        </li>
      </ul>
      <h3>projects</h3>
      <ul>
        <li>
          <a
            href="https://garnet.website"
            title="Go to Garnet."
            {...hrefOutside}
          >
            <p>garnet.website</p>
          </a>
        </li>
        <li>
          <a
            href="https://goodgraphics.xyz/"
            title="Go to Good Graphics."
            {...hrefOutside}
          >
            <p>good graphics</p>
          </a>
        </li>
      </ul>
      <h3>things i've written</h3>
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

export const config = {
  unstable_runtimeJS: false,
};
