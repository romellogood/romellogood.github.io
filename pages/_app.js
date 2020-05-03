/* eslint-disable no-nested-ternary */
import React from 'react';
import {createGlobalStyle} from 'styled-components';

import {globalCSS} from '../components/styles';

const GlobalStyle = createGlobalStyle`${globalCSS}`;

const NextApp = (props) => {
  const {Component, pageProps = {}} = props;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default NextApp;
