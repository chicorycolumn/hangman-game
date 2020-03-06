// You won, when displayWord no longer contains any underscores.
// You lost, when remainingGuesses <= 0.
// New Game button, picks new words from array of words at random. Easy Medium Hard arrays.
// Save Button - save the state to local storage, and we add to mount fxn loading state from local storage.
// Undo last move.
// Add pictures.

import React from "react";
import "./App.css";
import hang1 from "../hm/hang1";

class App extends React.Component {
  state = {
    hiddenWord: "SEVEN",
    displayWord: "_____",
    guessesRemaining: 10
  };

  handleKeyPress = event => {
    this.setState(currentState => {
      if (currentState.hiddenWord.toLowerCase().includes(event.key)) {
        let newWordToDisplay = currentState.hiddenWord
          .toLowerCase()
          .split("")
          .map((letter, index) => {
            if (letter.toLowerCase() === event.key) {
              return letter;
            } else {
              if (currentState.displayWord[index] !== "_") {
                return currentState.displayWord[index];
              } else return "_";
            }
          });

        return { displayWord: newWordToDisplay.join("") };
      } else {
        return { guessesRemaining: currentState.guessesRemaining - 1 };
      }
    });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <header className="Manhang"></header>
        <p>Hello and welcome to Han that Mang!</p>
        <p>
          {this.state.displayWord
            .split("")
            .join(" ")
            .toUpperCase()}
        </p>
        <img src="./hm/hang1.png" alt="hangman stage 1"></img>
        <p>You have {this.state.guessesRemaining} guesses remaining!</p>
      </div>
    );
  }
}

export default App;
