import React, {Component} from "react";
import DashBoard from "../DashBoard/DashBoard";
import {Link} from "react-router-dom";
import ModalWindow from "../ModalWindow/ModalWindow";
import "./game.css";
export default class Game extends Component{
      state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true,
        winner: "",
      };
    
      async handleClick(i) {

          const {history, stepNumber,xIsNext} = this.state;

        const historyNew = history.slice(0, stepNumber + 1);
        const current = historyNew[historyNew.length - 1];
        const squares = current.squares.slice();
        if(squares[i] === null)
          {
            squares[i] = xIsNext ? "X" : "O";
          }
        else return;
        await this.setState({
          history: historyNew.concat([
            {
              squares: squares
            }
          ]),
          stepNumber: historyNew.length,
          xIsNext: !xIsNext
        });
        this.winnerCheck();
      }
  
    winnerCheck = () => {
        const {history, stepNumber} = this.state;
        const current = history[stepNumber].squares;
        const winLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8],
        ]
        for(let i = 0; i<winLines.length; i++){
            const [a, b, c] = winLines[i];
            if (current[a] && current[a] === current[b] && current[a] === current[c]) {
              this.setState({winner: current[a]})
            }
            else{

            }
            
        }

    }
    
      render() {
          const {history, stepNumber, xIsNext, winner} = this.state;
        const historyNew = history;
        const current = historyNew[stepNumber];   
        let status = xIsNext ? "Next step - X" : "Next step - O";
    
        return (
          <div className="game">
            {winner &&         
              <ModalWindow 
                winner = {winner}
              />           
            }
            <div className="game-board">
              <DashBoard
                squares={current.squares}
                onClick={i => this.handleClick(i)}
              />
            </div>
            <div className="game-info">
              <span>{status}</span>
            </div>
            <Link to="/"><div className="exit__game">X</div></Link>
          </div>
        );
      }
    }