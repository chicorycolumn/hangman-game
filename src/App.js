// You won, when displayWord no longer contains any underscores.
// You lost, when remainingGuesses <= 0.
// New Game button, picks new words from array of words at random. Easy Medium Hard arrays.
// Save Button - save the state to local storage, and we add to mount fxn loading state from local storage.
// Undo last move.
// Add pictures.

import React from 'react';
import './App.css';
import hang9 from './hm/hang1.png';
import hang8 from './hm/hang2.png';
import hang7 from './hm/hang3.png';
import hang6 from './hm/hang4.png';
import hang5 from './hm/hang5.png';
import hang4 from './hm/hang6.png';
import hang3 from './hm/hang7.png';
import hang2 from './hm/hang8.png';
import hang1 from './hm/hang9.png';
import hang0 from './hm/hangX.png';

class App extends React.Component {
  state = {
    hiddenWord: 'SEVEN',
    displayWord: '',
    guessesRemaining: 9,
    imagePicker: {
      9: hang9,
      8: hang8,
      7: hang7,
      6: hang6,
      5: hang5,
      4: hang4,
      3: hang3,
      2: hang2,
      1: hang1,
      0: hang0
    },
    statusMsg: 'Good Luck!'
  };

  handleKeyPress = event => {
    if (this.state.guessesRemaining >= 0) {
      this.setState(currentState => {
        if (currentState.hiddenWord.toLowerCase().includes(event.key)) {
          let newWordToDisplay = currentState.hiddenWord
            .toLowerCase()
            .split('')
            .map((letter, index) => {
              if (letter.toLowerCase() === event.key) {
                return letter;
              } else {
                if (currentState.displayWord[index] !== '_') {
                  return currentState.displayWord[index];
                } else return '_';
              }
            });

          return { displayWord: newWordToDisplay.join('') };
        } else {
          return this.state.guessesRemaining === 0
            ? { statusMsg: 'You lost.' }
            : {
                guessesRemaining: currentState.guessesRemaining - 1,
                statusMsg: `You have ${this.state.guessesRemaining} guesses remaining! `
              };
        }
      });
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    this.setState(currentState => {
      const populateDisplayWord = () => {
        return '_'.repeat(currentState.hiddenWord.length);
      };
      return { displayWord: populateDisplayWord() };
    });
  }

  render() {
    console.log(`hang${this.state.guessesRemaining}`);
    return (
      <div className="App">
        <header className="Manhang"></header>
        <p>Hello and welcome to Han that Mang!</p>
        <p>
          {this.state.displayWord
            .split('')
            .join(' ')
            .toUpperCase()}
        </p>
        <img
          src={this.state.imagePicker[this.state.guessesRemaining]}
          alt="hangman stage 1"
        ></img>
        <p>{this.state.statusMsg}</p>
      </div>
    );
  }
}

export default App;
