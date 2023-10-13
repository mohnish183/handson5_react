import React, { PureComponent } from "react";

export default class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 5,
    };
  }
  render() {
    return (
      <div style={{ border: "1px solid black" }}>
        <div style={{ textAlign: "center" }}>
          <h4>count : {this.state.count}</h4>
          <button onClick={() => this.setState({ count: 5 })}>Click</button>
        </div>
        <p>
          <b>Defination :</b> a pure component is a class component that has a
          special optimization feature known as "shallow prop and state
          comparison". Pure components are used to improve the performance of
          your React application by reducing unnecessary re-renders.
        </p>
        <p>
          <b>Explaination of above Eg:</b> In above eg we pass same value in
          useState, so earlier if we hit the button still re-render happen to
          stop this we use PureComponent in class.
        </p>
      </div>
    );
  }
}
