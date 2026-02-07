import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count
    };
    console.log("bu constructor()");
  }

  componentDidMount() {
    console.log("bu componentDidMount()");
  }

  render() {
    console.log("bu render()");
    return <h1>Child Component - {this.state.count}</h1>
  }
}
export default Child;