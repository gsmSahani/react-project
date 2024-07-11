# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- ----------------------------------------------------------------------- -->
this is about the react components lifecycle
import React, { Component } from "react";
import Counter1 from "./Components/Counter/Counter1";
class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log(
      "ComponentDidMount: it is displayed when the component renderd first time"
    );
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <Counter1 number={this.state.count}></Counter1>
        {/* <button onClick={this.increment.bind(this)}>Click Me</button> //this.bind binds the this keyword to the increment functoin */}
        <button onClick={() => {this.increment()}} className="bg-black text-white rounded-full p-1">Click Me</button>
      </div>
    );
  }
}
export default App;
