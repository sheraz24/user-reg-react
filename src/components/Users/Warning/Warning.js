import React, { useState } from "react";
import Button from "../../UI/Button/Button";

const WarningMessage = () => {
    const validityHandler = (props) => {
        props.setIsNameValid(true);
        //figure out how to get the variables into here... draw a diagram and figure out how this would work 
    } 
    return (
    <div className="popup">
        <h2>Invalid input</h2>
        <Button type="button" onClick={validityHandler}></Button>
    </div>
    );
};

export default WarningMessage;
