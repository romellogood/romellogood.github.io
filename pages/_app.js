import * as Fathom from 'fathom-client';
import Head from 'next/head';
import React, {useEffect} from 'react';
import 'styles.css';

// Taken from - https://vercel.com/guides/deploying-nextjs-using-fathom-analytics-with-vercel
export const useFathom = () => {
  // const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('XRTIFTNI', {
      includedDomains: ['romellogoodman.com'],
    });

    // NOTE: We arent doing any next/link transitions but just in case
    // function onRouteChangeComplete() {
    //   Fathom.trackPageview();
    // }
    // // Record a pageview when route changes
    // router.events.on('routeChangeComplete', onRouteChangeComplete);

    // // Unassign event listener
    // return () => {
    //   router.events.off('routeChangeComplete', onRouteChangeComplete);
    // };
  }, []);
};

const NextApp = (props) => {
  const {Component, pageProps = {}} = props;

  useFathom();

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
      <Component {...pageProps} />
    </>
  );
};

export default NextApp;
