import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import AddButton from "./AddButton";

function Header({ title }) {
    const onClick = () => {
        alert("Click!");
    };
    return (
        <header className="header">
            <h1 className="headerTitle"> {title} (by dkaimekin)</h1>
            <AddButton onClick={onClick} />
        </header>
    );
}

// Set up default props for Header component
Header.defaultProps = {
    title: "Default React To Do List",
};

// Set up prop types for Header component
Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
