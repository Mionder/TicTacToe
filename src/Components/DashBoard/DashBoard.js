import React, {Component} from "react";
import Field from "../Field/Field";
import "./dashboard.css";

export default class DashBoard extends Component{
    renderField(i) {
        return (
          <Field
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }
    
      render() {
        return (
          <div className="dashboard">
              <div className="_container">   
              <div className="dashboard__wrapper"> 
                <div className="dashboard__wrapper-shadow">
                        <div className="field__row">
                            {this.renderField(0)}
                            {this.renderField(1)}
                            {this.renderField(2)}
                        </div>
                        <div className="field__row">
                            {this.renderField(3)}
                            {this.renderField(4)}
                            {this.renderField(5)}
                        </div>
                        <div className="field__row">
                            {this.renderField(6)}
                            {this.renderField(7)}
                            {this.renderField(8)}
                        </div>
                    </div>  
                </div>   
                </div>
          </div>
        );
      }
    }