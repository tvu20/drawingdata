import React, { Component } from "react";
import pop from "../assets/popgraph.png";
import "../styles/pop.css";

class Population extends Component {
  render() {
    return (
      <div className='pop'>
        <h2>Populations</h2>

        <div className='pop-description'>
          <p>
            A bar graph of the populations of each of the 53 minority ethnic
            groups. Bars are colored based on the language family of the group,
            with the same code as used in the map portion.
            <br />
            <br />
            Data for the Kinh majority group was excluded from the graph, since
            the total population is around 80 million.
          </p>
        </div>
        <img src={pop} />
      </div>
    );
  }
}

export default Population;
