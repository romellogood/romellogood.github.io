import React from 'react';

const hrefOutside = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const Page = () => {
  return (
    <main>
      <h2>
        hello, my name is Romello (<span className="color"> mello </span>)
        Goodman.
      </h2>
      <p>
        I am a creative technologist primarily working with web technologies. By
        day, I work as a senior software engineer at The New York Times. By
        night, I use a number of different tools to explore the intersection of
        creativity and code.
      </p>
      <h2>find me around the web</h2>
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
            href="https://www.instagram.com/mello.goodgraphics"
            title="Go to Instagram."
            {...hrefOutside}
          >
            <p>insta</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.patreon.com/romellogoodman"
            title="Go to Patreon."
            {...hrefOutside}
          >
            <p>patreon</p>
          </a>
        </li>
        <li>
          <a
            href="https://observablehq.com/@romellogoodman?tab=profile"
            title="Go to Observable."
            {...hrefOutside}
          >
            <p>coding blog</p>
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
      <h2>projects</h2>
      <ul>
        <li>
          <a
            href="https://goodgraphics.xyz/"
            title="Go to Good Graphics."
            {...hrefOutside}
          >
            <p>Good Graphics</p>
          </a>
        </li>
        <li>
          <a
            href="https://garnet.website"
            title="Go to Garnet."
            {...hrefOutside}
          >
            <p>garnet.website</p>
          </a>
        </li>
      </ul>
      <h2>articles</h2>
      <ul>
        <li>
          <a
            href="https://increment.com/remote/code-is-sourdough"
            title="Go to the Increment article."
            {...hrefOutside}
          >
            <p>Code is sourdough</p>
          </a>
        </li>
        <li>
          <a
            href="https://increment.com/software-architecture/a-monorepo-renaissance"
            title="Go to the Increment article."
            {...hrefOutside}
          >
            <p>A monorepo renaissance</p>
          </a>
        </li>
        <li>
          <a
            href="https://open.nytimes.com/what-if-we-used-images-to-navigate-new-york-times-content-5a6d87ab3688"
            title="Go to The Times Open article."
            {...hrefOutside}
          >
            <p>What If We Used Images to Navigate New York Times Content?</p>
          </a>
        </li>
      </ul>
      <h2>talks and panels</h2>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/watch?v=qrXe7dan-o8"
            title="Go to the Youtube video."
            {...hrefOutside}
          >
            <p>
              Urban Planning & Codebase Architecture. Or, how not to end up with
              a Wendy's in the middle of your codebase
            </p>
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/presentation/d/1bpnRUbXtXVqTJB1k3Y0afpA7v6EATZndRGf_Ja9ggCg/edit#slide=id.p"
            title="Go to the Google slides presentation."
            {...hrefOutside}
          >
            <p>Graphic = fn(state)</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=4uLV8ieQVZk"
            title="Go to the Youtube video."
            {...hrefOutside}
          >
            <p>This Dot Media's React Contributor Days May 2021</p>
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
