import { Component } from "react";
import Child from "./eshki_versiya";

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    };
  }
  render() {
    return (<>
      <button></button>
      <br />
      <hr />
      <br />
      <Child count={this.state.count} />
    </>)
  }
}


export default Parent