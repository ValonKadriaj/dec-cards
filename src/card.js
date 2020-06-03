import React, { Component } from 'react';
import './App.css';
class Card extends Component {
  render() {
    let angel = Math.random() * 90 - 45;
    let x = Math.random() * 40 - 20;
    let y = Math.random() * 40 - 20;
    let transform = `translate(${x}px, ${y}px) rotate(${angel}deg)`;
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
