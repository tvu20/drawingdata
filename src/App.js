import React, { Component } from "react";
import "./App.css";
import InfoBox from "./components/InfoBox.js";
import Picture from "./components/Picture.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: null,
    };

    this.handleCallback = this.handleCallback.bind(this);
  }

  handleCallback = childData => {
    this.setState({ showing: childData });
  };

  renderBox = () => {
    if (this.state.showing) {
      return (
        <InfoBox
          key='0'
          group='Kinh'
          population='82,085,826'
          location='Throughout Vietnam'
        />
      );
    }
  };

  render() {
    const { showing } = this.state;
    return (
      <div className='container'>
        <h1>Hello world!</h1>
        <Picture parentCallback={this.handleCallback} />

        {this.renderBox()}
      </div>
    );
  }
}

export default App;
