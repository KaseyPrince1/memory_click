import React, { Component } from 'react';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import PlayCards from './components/PlayCards';
import cards from './cards.json';
//==============================================================================================================================================================================================
class App extends Component {
  // Setting this.state.cards to the cards.json || ex: friends json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

//==============================================================================================================================================================================================

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.score);
        console.log(this.state.highscore);
      });
    } 
    this.state.cards.forEach(play => {
      play.count = 0;
    });

    alert(`Try Again \n Final Score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
//==============================================================================================================================================================================================

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) 
      {
        if(cards[i].count === 0) //||typeof(cards[i].count)==="undefined") << removed this from 'if(cards...'
        {  
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
            console.log(typeof(id));
            console.log(o);
            console.log(i);
          });
         
          this.state.cards.sort(() => Math.random() - 1)
          return true;   
        } else {
          this.gameOver();
        }
      }
        return false;
    });
  }
//==============================================================================================================================================================================================
  render() {
    return (
    <div>
        <Title score={this.state.score} highscore={this.state.highscore}>Clicky Game!</Title>
      <Wrapper>
        {this.state.cards.map(card => (
          <PlayCards 
            clickCount={this.clickCount}
            id={card.id}
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
