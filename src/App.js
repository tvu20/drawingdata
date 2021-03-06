import React, { Component } from "react";
import "./styles/general.css";
import Heading from "./components/Heading.js";
import Maps from "./components/Maps.js";
import Dashboard from "./components/Dashboard.js";
import Population from "./components/Population.js";
import people from "./assets/peoples.png";
import modern from "./assets/peoples-modern.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: null,
      items: [],
      index: -1,
      toggle: false,
    };

    fetch("data.json")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });

    this.handleToggle = this.handleToggle.bind(this);
  }

  isShowing = i => {
    var show = this.state.showing;
    if (i !== this.state.index) {
      return false;
    } else {
      return show;
    }
  };

  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    const { showing, items } = this.state;
    return (
      <div className='container'>
        <Heading />
        <Dashboard />
        <hr />
        <Maps />
        <hr />
        <Population />
        <hr />
        <div onClick={this.handleToggle}>
          <img
            className='people'
            src={this.state.toggle ? modern : people}
          ></img>
        </div>
        <hr />
        <h5>Final Project for FRS174 - Giao Vu Dinh</h5>
      </div>
    );
  }
}

export default App;
