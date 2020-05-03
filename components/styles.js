import styled, {css} from 'styled-components';

import theme from '../utils/theme';

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

export const ConstrainCSS = css`
  max-width: 800px;
  margin: auto;
  padding: 0px ${theme.space[2]}px;
`;

export const Main = styled.main`
  ${ConstrainCSS}
  margin-top: ${theme.space[4]}px;
`;
