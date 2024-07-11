import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevprops, prevState) {
    if (prevprops.number !== this.props.number) {
      console.log("COmponent Updated");
    }
  }
  render() {
    return (
      <>
        <h1>{this.props.number}</h1>
      </>
    );
  }
}
export default Counter;
