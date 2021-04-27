import React, { Component } from "react";
import "./styles/general.css";
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
        <h1>54 Peoples</h1>
        <h3>Final Project for FRS174 - Giao Vu Dinh</h3>

        <p>
          Growing up in Ho Chi Minh City, the most urban and cosmopolitan hub in
          Vietnam, I was surrounded by people who all spoke the same language
          with the same accents and spent most days of the year dressed in
          westernized, modern clothing. On special occasions, we would all dress
          in the same style of traditional dress and attend the same festivals,
          but for the most part, a lot of my childhood was spent with an
          emphasis on "modern" Vietnamese culture.
          <br />
          In elementary school, Vietnamese students are taught that there are 54
          ethnic groups recognized by the Vietnamese government, the largest of
          which being the Kinh group, otherwise known as what most people
          consider to be Vietnamese people. We were never taught the names or
          traditions of these groups; they were merely a statistic that most
          Vietnamese youths were expected to know.
          <br />
          In this project, I wanted to capture the diversity in traditional
          dress and customs of each of these ethnic groups, while also
          highlighting how they share many things in common and collectively
          make up the Vietnamese people.
        </p>

        <hr />
        <Dashboard />
      </div>
    );
  }
}

export default App;
