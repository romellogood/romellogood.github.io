import PropTypes from 'prop-types';
import React from 'react';

import {PageError} from '../components/PseudoPages';

const ErrorPage = ({statusCode}) => <PageError statusCode={statusCode} />;

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

ErrorPage.getInitialProps = ({err, req, res}) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  const url = req && req.url ? req.url : '';

  console.error(`User requested non-existant page: ${url}`);

  return {meta: {titlePrefix: 'Error'}, statusCode};
};

export default ErrorPage;
