import React, { Component } from 'react';
import Posts from './Posts';

class Homepage extends Component {
  render() {
    return (
      <div>
        <p>Hello! I'm David and this is a website to display some of my work</p>

        <Posts />
      </div>
    );
  }
}


export default Homepage;