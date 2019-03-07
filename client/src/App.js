import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topscore: 0,
    score: 0
  };

  win = () => {
    if (this.state.score === 12){
      alert("WELL DONE!");
      this.restart();
    }
  }

  restart = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score });
      this.state.friends.forEach(friend => {
        friend.clicked = false;
      });
      alert("You Lose This Time Spiderman!");
      this.setState({ score: 0 });
      return true;
    }
  }

  shuffleFriend = id => {
    this.state.friends.find((clicked, i) => {
      if (clicked.id === id) {
        if (friends[i].clicked === false) {
          //this code iterates through all the friend objects
          friends[i].clicked = true;
          this.setState({ friends, score: this.state.score + 1 });
          friends.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.restart();
        }
      }
    })
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Score: {this.state.score} Top Score: {this.state.topscore} </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriend={this.shuffleFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
