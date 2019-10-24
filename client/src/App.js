import React, { Component } from 'react';
import Title from './components/Title';
import cards from './cards.json';
import Wrapper from './components/Wrapper';
import PlayCards from './components/PlayCards';

class App extends Component {
  // Setting this.state.cards to the friends json array
  state = {
    cards,
    score: 0,
    highScore: 0

  };


  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
      });
    }
    this.state.cards.forEach(card => {
      card.count = 1;
    });
    alert('Try Again');
    this.setState({score: 0});
    return true;
  }

  countOnClick = id => {
    this.state.cards.find((o, i) => { 
      if (o.id === id) {
        if(cards[i].count === 0 ||typeof(cards[i].count)==="undefined" ){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
          });
          this.state.cards.sort(() => Math.random() - 1)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
    <div>
        <Title score={this.state.score} highScore={this.state.highScore}></Title>
      <Wrapper>
        {this.state.cards.map(card => (
          <PlayCards 
            countOnClick={this.countOnClick}
            key={card.id}
            image={card.image}
            count={this.count}
          />
        ))}
     </Wrapper>   
  </div>
    );
  }
}

export default App;
