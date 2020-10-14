import React from "react";
import { Link } from "react-router-dom";
import TicTacToe from "./tic-tac-toe.png";
import "./StartMenu.css";

export default function StartMenu() {
    return (
        <div className="start__menu">
            <div className="_container">
                <div className="start__menu-wrapper">
                    <h2 className="start__menu-title">Tic Tac Toe <img src={TicTacToe} alt="logo"/></h2>
                    <Link to="/game"><button className="start__menu-button">Play</button></Link>
                    <Link to="/exit"><button className="start__menu-button">Exit</button></Link>
                </div>
            </div>
        </div>
    );
}
