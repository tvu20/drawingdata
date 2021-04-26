import React, { Component } from "react";
import ReactDOM from "react-dom";

class People extends Component {
  importAll(r) {
    return r.keys().map(r);
  }

  render() {
    return (
      <div>
        <img key={1} src={require("../assets/slices/1.jpg")} alt='info'></img>
      </div>
    );
  }
}

export default People;
