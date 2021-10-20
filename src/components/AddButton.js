import React from "react";
import "./addButton.css";
import PropTypes from "prop-types";

// Was not used in the final project
function AddButton({ onClick }) {
    return (
        <button className="btn" onClick={onClick}>
            Add task
        </button>
    );
}

AddButton.propTypes = {
    onClick: PropTypes.func,
};

export default AddButton;
