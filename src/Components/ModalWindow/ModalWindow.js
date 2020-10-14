import React, {Component} from "react";

export default class ModalWindow extends Component{
    restartGame = () => {
        window.location.reload();
    }
    render(){
        const {winner} = this.props;
        return(
            <div className="modal__winner">
                <div className="modal__wrapper">
                <h4 className="modal__title">Winner: <span className="modal__player-winner">{winner}</span></h4>
                <button className="modal__winner-button" onClick={this.restartGame}>Play again</button>
                </div>
          </div>
        )
    }
}