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
      <React.Fragment>
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

        <div className='people-description'>
          <p>
            This is a collection of portraits for each of the 54 Vietnamese
            ethnic groups. Upon clicking on each portrait, you can learn more
            about each group, including their location, population, and details
            about their history and traditons.
            <br />
            <br />
            Each group has multiple distinct traditional outfits for many
            different occasions; it was difficult to find a standard source of
            images for all of the groups because some images had people doing
            common day tasks, while others were taken at festivals or during
            performances. Additionally, like many people in urban areas of
            Vietnam, younger members of most ethnic groups have also adapted
            modern styles of clothing, so many traditional outfits are not
            exactly accurate representations of what most people in each ethnic
            group would wear on a day-by-day basis.
            <br />
            <br />
            Therefore, the outfits worn by the people in the collage of
            portraits are each adapted from a collection of photos. They are all
            accurate representations of traditional dress for each group, but
            they span a range of styles and events.
            <br />
            <br />
            <h3>Data Collection</h3>
            The statistical information (location and population) for each group
            was taken from the 2019 census, found on each group's respective
            Wikipedia page. The more detailed information about each group's
            customs, holidays, etc. were translated from Vietnamese sources
            (primarily newspaper articles and textbooks/government sourced
            materials).
            <br />
            <br />
            Some of the most often referenced sources for this project include{" "}
            <a href='https://vnexpress.net/'>VNExpress</a>,{" "}
            <a href='http://chinhphu.vn/portal/page/portal/chinhphu/NuocCHXHCNVietNam/ThongTinTongHop/dantoc'>
              the Vietnamese oficial government website,
            </a>{" "}
            <a href='https://en.wikipedia.org/wiki/List_of_ethnic_groups_in_Vietnam'>
              the general Wikipedia page,{" "}
            </a>
            and{" "}
            <a href='http://www.cema.gov.vn/gioi-thieu/cong-dong-54-dan-toc.htm'>
              the Committee of Ethnic Affairs website.
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default People;
