import React, { Component } from "react";
import "./App.css";
import InfoBox from "./components/InfoBox.js";
import Modal from "./components/Modal.js";
import Picture from "./components/Picture.js";
import People from "./components/People.js";
import Dashboard from "./components/Dashboard.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: null,
      items: [],
      index: -1,
    };

    fetch("data.json")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  isShowing = i => {
    var show = this.state.showing;
    if (i !== this.state.index) {
      return false;
    } else {
      return show;
    }
  };

  renderBox = () => {
    const { items, index } = this.state;
    const selected = items[index];

    if (this.state.showing) {
      return (
        <InfoBox
          key={selected.id}
          group={selected.group}
          population={selected.population}
          location={selected.location}
          description={selected.description}
        />
      );
    }
  };

  render() {
    const { showing, items } = this.state;
    return (
      <div className='container'>
        <Dashboard />
      </div>
    );
  }
}

export default App;
