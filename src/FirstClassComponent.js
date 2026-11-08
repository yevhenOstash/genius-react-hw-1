import { Component } from "react";

class FirstClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  render() {
    return (
      <div>
        <h1>number : {this.state.number}</h1>
      </div>
    );
  }
}

export default FirstClassComponent;
