import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const statusCodes = {
  400: 'Bad Request',
  404: '404. Page Not Found',
  500: 'Internal Server Error',
};

const Section = styled.section`
  padding: ${theme.space[4]}px 0px;
  text-align: center;
`;

export const PageError = (props) => {
  const {message, statusCode} = props;
  const errorText =
    statusCodes[statusCode] || message || 'An unexpected error has occurred';

  return (
    <Section>
      <p>{errorText}</p>
    </Section>
  );
};

PageError.propTypes = {
  message: PropTypes.string,
  statusCode: PropTypes.number,
};
