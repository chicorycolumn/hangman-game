import React from "react";
import "./App.css";

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
        <p>You have {this.state.guessesRemaining} guesses remaining!</p>
      </div>
    );
  }
}

export default App;
