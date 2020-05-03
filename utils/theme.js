import {css} from 'styled-components';

const theme = {
  maxWidths: {
    small: '544px',
    medium: '768px',
    large: '1012px',
    xlarge: '1280px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    blue: {
      light: '#c8e1ff',
      regular: '#2188ff',
      dark: '#005cc5',
    },
    green: {
      light: '#bef5cb',
      regular: '#34d058',
      dark: '#22863a',
    },
    grey: {
      light: '#e1e4e8',
      regular: '#959da5',
      dark: '#586069',
    },
    orange: {
      light: '#ffd1ac',
      regular: '#fb8532',
      dark: '#e36209',
    },
    purple: {
      light: '#d1bcf9',
      regular: '#8a63d2',
      dark: '#5a32a3',
    },
    red: {
      light: '#fdaeb7',
      regular: '#ea4a5a',
      dark: '#cb2431',
    },
    yellow: {
      light: '#fff5b1',
      regular: '#ffdf5d',
      dark: '#f9c513',
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

theme.media = Object.keys(theme.maxWidths).reduce((acc, label) => {
  acc[label] = {};
  acc[label].css = (...args) => css`
    @media (max-width: ${theme.maxWidths[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default theme;
