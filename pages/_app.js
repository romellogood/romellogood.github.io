import Head from 'next/head';
import React from 'react';
import {createGlobalStyle, css} from 'styled-components';

import theme from 'utils/theme';

export const globalCSS = css`
  * {
    vertical-align: baseline;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
  }

  body {
    margin: 0;
    font-family: 'Public Sans', sans-serif;
    font-size: ${theme.fontSizes[2]}px;
    font-weight: ${theme.fontWeights.normal};
    line-height: 1.25;
    word-wrap: break-word;
    font-kerning: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0 0 1.0875rem 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.9rem;
    line-height: 1.1;
    color: hsla(0, 0%, 0%, 0.9);
    font-weight: 700;
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin: 0.67em 0;
    font-size: 2em;
  }

  h2 {
    font-size: 1.51572rem;
  }

  h3 {
    font-size: 1.31951rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.87055rem;
  }

  h6 {
    font-size: 0.81225rem;
  }

  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const GlobalStyle = createGlobalStyle`${globalCSS}`;

const NextApp = (props) => {
  const {Component, pageProps = {}} = props;

  return (
    <>
      <Head>
        <title>Romello Goodman</title>
        <meta
          name="description"
          content="The Personal Website of Romello Goodman."
        />
        <meta charSet="utf-8" />
        <meta name="keywords" content="Romello Goodman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Public+Sans:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default NextApp;
