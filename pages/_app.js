import Head from 'next/head';
import React, {useEffect} from 'react';
import 'styles.css';

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
        <script
          src="https://cdn.usefathom.com/script.js"
          data-site="XRTIFTNI"
          defer
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default NextApp;
