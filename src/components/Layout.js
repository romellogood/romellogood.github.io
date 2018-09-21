import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Helmet from 'react-helmet';
import styled, {injectGlobal} from 'styled-components';

import favicon from './favicon.png';
import {version} from '../../package.json';

injectGlobal`
  body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,sans-serif;
    font-weight: 400;
    line-height: 1.25;
    word-wrap: break-word;
    font-kerning: normal;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0 0 1.0875rem 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 2.9rem;
    line-height: 1.1;
    color: hsla(0, 0%, 0%, 0.9);
    font-weight: 700;
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin: .67em 0;
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
    text-decoration: none;
  }
`;

const Div = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;

  .color {
    transition: color 0.5s ease;

    ${props => props.color && `color: ${props.color};`};
  }
`;

class LayoutWrapper extends Component {
  static propTypes = {
    children: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.state = {
      color: '#000000'
    };

    this.getColor = this.getColor.bind(this);
  }

  componentDidMount() {
    setInterval(this.getColor, 1000);
  }

  /**
   * Taken from
   * stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
   */
  getColor() {
    const date = new Date();
    const h = 360 * (date.getMinutes() / 59);
    const s = date.getSeconds() / 59;
    const v = 0.75;
    let r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
        break;
      default:
        break;
    }

    const red = Math.round(r * 255);
    const green = Math.round(g * 255);
    const blue = Math.round(b * 255);

    this.setState({color: `rgb(${red},${green},${blue})`});
  }

  render() {
    const {children} = this.props;
    const {color} = this.state;

    return (
      <div>
        <Helmet>
          <link rel="icon" href={favicon} />
          <meta charset="utf-8" />
          <meta
            name="description"
            content="The Personal Website of Romello Goodman."
          />
          <meta name="keywords" content="Romello Goodman" />
          <meta name="version" content={version} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Romello Goodman</title>
        </Helmet>
        <Div color={color}>{children}</Div>
      </div>
    );
  }
}

export default LayoutWrapper;
