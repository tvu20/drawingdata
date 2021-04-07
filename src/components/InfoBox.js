import React, { Component } from "react";
import "../styles/InfoBox.css";

class InfoBox extends Component {
  state = {
    showing: this.props.show,
    group: this.props.group,
    population: this.props.population,
    location: this.props.location,
    description: this.props.description,
  };

  renderBox = () => {
    const { group, population, location, description } = this.props;
    return (
      <div className='infoBox'>
        <h2>{group}</h2>
        <p>Population: {population}</p>
        <p>Location: {location}</p>
        <p>Description: {description}</p>
      </div>
    );
  };

  render() {
    const { showing } = this.props;
    return <React.Fragment>{this.renderBox()}</React.Fragment>;
  }
}

export default InfoBox;
