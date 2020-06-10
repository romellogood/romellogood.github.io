import React, {Component} from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';

import theme from 'utils/theme';

export const Main = styled.main`
  max-width: 800px;
  margin: auto;
  padding: 0px ${theme.space[2]}px;
  margin-top: ${theme.space[4]}px;
`;

const Div = styled.div`
  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0 0 1.0875rem 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.9rem;
    line-height: 1.1;
    color: hsla(0, 0%, 0%, 0.9);
    font-weight: 700;
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin: 0.67em 0;
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
    color: black;
  }

  a > h3:hover,
  a:hover {
    text-decoration: underline;
  }

  a h3 {
    display: inline-block;
  }
`;

const GlobalColor = createGlobalStyle`${css`
  body {
    .color {
      transition: color 0.25s ease;

      ${(p) => p.color && `color: ${p.color};`};
    }
  }
`}`;

class Color extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#000000',
    };

    this.getColor = this.getColor.bind(this);
  }

  componentDidMount() {
    this.getColor();
    setInterval(this.getColor, 500);
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
    return <GlobalColor color={this.state.color} />;
  }
}

const HomePage = (props) => {
  return (
    <Main>
      <Color />
      <Div>
        <h1 className="color">hi people!</h1>
        <h3>
          my name is <span className="color">Romello Goodman</span>.
        </h3>
        <a
          href="https://github.com/romellogoodman"
          target="_blank"
          rel="noopener noreferrer"
          title="Go to github."
        >
          <h3>github</h3>
        </a>
        <div />
        <h3 className="color">around the web</h3>
        <a
          href="https://increment.com/software-architecture/a-monorepo-renaissance"
          target="_blank"
          rel="noopener noreferrer"
          title="Go to Increment article"
        >
          <p>A monorepo renaissance</p>
        </a>
        <a
          href="https://open.nytimes.com/what-if-we-used-images-to-navigate-new-york-times-content-5a6d87ab3688"
          target="_blank"
          rel="noopener noreferrer"
          title="Go to The Times Open article"
        >
          <p>What If We Used Images to Navigate New York Times Content?</p>
        </a>
      </Div>
    </Main>
  );
};

export default HomePage;
