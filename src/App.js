import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Card from './card';
class App extends Component {
  state = {
    decId: '',
    cards: [],
  };
  handleSubmit = async () => {
    const res = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.decId}/draw/`
    );
    const cardRes = res.data.cards[0];

    this.setState((oldState) => ({
      cards: [...oldState.cards, { id: cardRes.code, image: cardRes.image }],
    }));
  };
  async componentDidMount() {
    const res = await axios.get(
      'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    );

    this.setState({ decId: res.data.deck_id });
  }
  render() {
    return (
      <div className="App">
        <div style={{ marginBottom: '2rem' }}>
          <button onClick={this.handleSubmit}>get card</button>
        </div>
        <div style={{ marginTop: '80px' }}>
          {this.state.cards.map((card) => (
            <Card key={card.id} image={card.image} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
