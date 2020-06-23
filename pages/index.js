import React from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';

import theme from 'utils/theme';

const Main = styled.main`
  max-width: 600px;
  margin: auto;
  padding: 0px ${theme.space[2]}px;
  margin-top: ${theme.space[4]}px;
`;

const Div = styled.div`
  a > h3 {
    text-decoration: underline;
  }
`;

const GlobalColor = createGlobalStyle`${css`
  :root {
    animation-duration: 15s;
    animation-name: rainbow;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    @keyframes rainbow {
      0% {
        --color: #f0aa80;
      }
      7.5% {
        --color: #f2def2;
      }
      15% {
        --color: #f08080;
      }
      22.5% {
        --color: #f080b8;
      }
      30% {
        --color: #db80f0;
      }
      37.5% {
        --color: #ac80f0;
      }
      45% {
        --color: #8092f0;
      }
      52.5% {
        --color: #80e5f0;
      }
      60% {
        --color: #80f0b8;
      }
      67.5% {
        --color: #80f085;
      }
      75% {
        --color: #baf080;
      }
      82.5% {
        --color: #e8f080;
      }
      90% {
        --color: #f0d480;
      }
      100% {
        --color: #f0aa80;
      }
    }
  }

  .color {
    color: var(--color) !important;
    transition: color 0.25s ease;
  }
`}`;

const hrefOutside = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const HomePage = (props) => {
  return (
    <Main>
      <GlobalColor />
      <Div>
        <h1 className="color">hi people!</h1>
        <h3>
          my name is <span className="color">Romello Goodman</span>.
        </h3>
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
      </Div>
    </Main>
  );
};

export default HomePage;
