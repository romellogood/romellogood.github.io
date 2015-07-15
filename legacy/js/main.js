var MyComponent = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
      clickCount: 0,
      showText: true,
      text: ''
    };
  },
  componentDidMount: function() {
    this.setState({
      text: 'Hello and welcome to my example!'
    });
  },
  handleButtonClick: function() {
    this.setState({
      clickCount: this.state.clickCount +=1,
      showText: !this.state.showText,
      text: 'Hello again!'
    });
  },
  render: function() {
    return (
      <div className="button-holder">
        <p>Click Count: {this.state.clickCount}</p>
        <h3>{this.state.showText ? this.state.text : null}</h3>
        <MyButton clickHandler={this.handleButtonClick} />
      </div>
    );
  }
});

var MyButton = React.createClass({
  propTypes: {
    clickHander: React.PropTypes.func.isRequired
  },
  handleClick: function () {
    this.props.clickHandler(this);
  },
  render: function() {
    return (
      <div className="my-button">
        <button className="btn" onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
});

React.render(
  <MyComponent />,
  document.getElementById('content')
);
