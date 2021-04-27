import React, { Component } from "react";
import maps from "../maps.js";
import "../styles/maps.css";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = i => {
    this.setState({
      id: i,
    });
  };

  renderMap() {
    return <img src={maps[this.state.id]} className='map'></img>;
  }

  render() {
    const languages = [
      "Vietic",
      "Austroasiatic",
      "Tai",
      "Kra",
      "Hmong-Mien",
      "Malayo-Polynesian",
      "Sino-Tibetan languages",
      "Combined",
    ];

    return (
      <div className='maps-container'>
        <div className='maps-description'>
          <h2>Mapping the Languages</h2>
          <p>
            Each of the groups has their own individual language and dialect,
            but the languages themselves are grouped into 7 categories, as
            listed below. These categories are primarily determined by tonal and
            phonetic systems, and while similar or related languages
            traditionally emerged from the same geographical regions, today,
            languages of common origin are much more spread out on a map.
            <br />
            <br />
            Each individual map represents the groups that speak languages of a
            particular family. The map is divided into provinces, using the data
            from the 2019 census. The darker the color of a province on the map,
            the more groups with populations living there that speak languages
            in this family. Since most groups have populations of different
            sizes in multiple provinces, these maps only take into account the
            number of groups and populations, rather than the sizes of these
            individual populations.
            <br />
            <br />
            The final map combines the data from all the previous maps into one
            master depiction of all the 54 groups - the darker a region on the
            map, the more diversity in ethnic groups living in that province.
          </p>
          <div className='buttons'>
            {maps.map((index, i) => {
              return (
                <div
                  key={i}
                  className={`button ${this.state.id === i ? "selected" : ""}`}
                  onClick={() => this.handleClick(i)}
                >
                  {" "}
                  {languages[i]}
                </div>
              );
            })}
          </div>
        </div>
        {this.renderMap()}
      </div>
    );
  }
}

export default Maps;
