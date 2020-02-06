import React, { Component } from "react";
import "./styles.css";
import Arcordion from "./components/Arcordion";

export default class App extends Component {
  constructor() {
    super();
    this.heading = "this is a heading";
  }

  render() {
    return (
      <div className="App">
        <Arcordion heading={this.heading}>
          this is a props childen default
        </Arcordion>
      </div>
    );
  }
}
