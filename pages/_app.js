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
`;

const GlobalStyle = createGlobalStyle`${globalCSS}`;

const NextApp = (props) => {
  const {Component, pageProps = {}} = props;

  return (
    <>
      <Head>
        <title>Romello Goodman</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default NextApp;
