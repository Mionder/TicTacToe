import React, { Component } from "react";
import PropTypes from "prop-types";
import "./field.css";

export default class Field extends Component {
    render() {
        const { value, onClick } = this.props;
        return (
            <div className="field" onClick={onClick}>
                {value}
            </div>
        );
    }
}

Field.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
};
