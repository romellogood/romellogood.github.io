import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    .color {
      transition: color 0.5s ease;

      ${p => p.color && `color: ${p.color};`};
    }
  }
`;

class App extends Component {
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
    return <GlobalStyle color={this.state.color} />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
