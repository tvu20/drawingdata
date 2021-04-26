import React, { Component } from "react";
import images from "../images.js";
import "../styles/people.css";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.value,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = i => {
    this.props.parentCallback(i);
  };

  render() {
    return (
      <div className='people-container'>
        {images.map((index, i) => {
          return (
            <img
              key={i}
              src={index}
              className='child'
              onClick={() => this.handleClick(i)}
            ></img>
          );
        })}
      </div>
    );
  }
}

export default People;
