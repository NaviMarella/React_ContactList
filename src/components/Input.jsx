import React from "react";
import PropTypes from 'prop-types';
import "./Input.css";

const Input = ({ type, value, maxLength, placeholder, handleInput }) => {
    function handleInputChange(e){
        handleInput(e.target.value);
    }
    return(
        <div className="input_container">
            <input
                type={type}
                maxLength={maxLength}
                value={value}
                placeholder={placeholder}
                onChange={handleInputChange}
            />
        </div>
    )
}

Input.defaultProps = {
    type: "search",
    maxLength: 50,
    placeholder: "Search"
}

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    maxLength: PropTypes.number,
    handleInput: PropTypes.func.isRequired
};


export default Input;