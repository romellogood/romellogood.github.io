import PropTypes from 'prop-types';
import React from 'react';

const statusCodes = {
  400: 'Bad Request',
  404: '404. Page Not Found',
  500: 'Internal Server Error',
};

export const PageError = (props) => {
  const {message, statusCode} = props;
  const errorText =
    statusCodes[statusCode] || message || 'An unexpected error has occurred';

  return (
    <main>
      <h3 className="color">{errorText}.</h3>
      <a href="/">
        <p>Go to homepage.</p>
      </a>
    </main>
  );
};

PageError.propTypes = {
  message: PropTypes.string,
  statusCode: PropTypes.number,
};

PageError.getInitialProps = ({err, req, res}) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  const url = req && req.url ? req.url : '';

  console.error(`User requested non-existant page: ${url}`);

  return {meta: {titlePrefix: 'Error'}, statusCode};
};

export default PageError;
