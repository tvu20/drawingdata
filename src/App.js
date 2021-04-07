import React, { Component } from "react";
import "./App.css";
import InfoBox from "./components/InfoBox.js";
import Picture from "./components/Picture.js";

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

    this.handleCallback = this.handleCallback.bind(this);
    this.handleIndex = this.handleIndex.bind(this);
  }

  handleCallback = (show, i) => {
    this.setState({ showing: show, index: i });
  };

  handleIndex(event) {
    this.setState({ index: event.target.value });
  }

  renderFlowers = () => {
    const { items, index } = this.state;
    return (
      <div className='picContainer'>
        {items.map(user => (
          <Picture
            key={user.id}
            value={user.id}
            showing={index === user.id}
            parentCallback={this.handleCallback}
          />
        ))}
      </div>
    );
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
        <h1>Hello world!</h1>
        {this.renderFlowers()}
        {this.renderBox()}
      </div>
    );
  }
}

export default App;
