import React, { Component } from "react";
import People from "./People.js";
import Modal from "./Modal.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      items: [],
      index: -1,
      selected: {},
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
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleCallback = i => {
    this.setState({
      index: i,
    });
    this.showModal();
  };

  render() {
    const selected = this.state.items[this.state.index];
    return (
      <div className='App'>
        <People
          parentCallback={this.handleCallback}
          modal={this.showModal}
        ></People>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          index={this.state.index}
          info={selected}
        />
      </div>
    );
  }
}

export default Dashboard;
