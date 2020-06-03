import React, { Component } from 'react';
import './App.css';
class Card extends Component {
  constructor() {
    super();
    this.angel = Math.random() * 90 - 45;

    this.x = Math.random() * 40 - 20;
    this.y = Math.random() * 40 - 20;
  }
  render() {
    let transform = `translate(${this.x}px, ${this.y}px) rotate(${this.angel}deg)`;
    return (
      <div>
        <img
          className="card"
          style={{ transform: transform }}
          src={this.props.image}
          alt="card"
        />
      </div>
    );
  }
}

export default Card;
