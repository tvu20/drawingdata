import React, { Component } from "react";
import "../styles/general.css";

class Heading extends Component {
  render() {
    return (
      <div className='container header'>
        <h1>54 Peoples</h1>

        <p className='text-wall'>
          {/* Growing up in Ho Chi Minh City, the most urban and cosmopolitan hub in
          Vietnam, I was surrounded by people who all spoke the same language
          with the same accents and spent most days of the year dressed in
          westernized, modern clothing. On special occasions, we would all dress
          in the same style of traditional dress and attend the same festivals,
          but for the most part, a lot of my childhood was spent with an
          emphasis on "modern" Vietnamese culture.
          <br />
          <br /> */}
          In elementary school, Vietnamese students are taught that there are 54
          ethnic groups recognized by the Vietnamese government, the largest of
          which being the Kinh group, otherwise known as what most people
          consider to be Vietnamese people. We were never taught the names or
          traditions of these groups; they were merely a statistic that most
          Vietnamese youths were expected to know.
          <br />
          <br />
          In this project, I wanted to capture the diversity in traditional
          dress and customs of each of these ethnic groups, while also
          highlighting how they share many things in common and collectively
          make up the Vietnamese people.
        </p>
      </div>
    );
  }
}

export default Heading;
