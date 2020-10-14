import React, {Component} from "react";
import "./field.css";

export default class Field extends Component{
    render(){
        const {value, onClick} = this.props;
        return(
            <div className="field" onClick={onClick}>
                {value}
            </div>
        )
    }
}