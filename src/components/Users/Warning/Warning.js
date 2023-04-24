//import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./Warning.css"
import styled from "styled-components";

//added the display editing here 
const ErrorMessage = styled.div`
  margin: 0.5rem 0;
  
  & .shade {
    display: ${(props) => (!props.errorStatus ? "block" : "none")};; 
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index:1001;
    -moz-opacity: 0.8;
    opacity:.80;
    filter: alpha(opacity=80);
  }

  & .nameErrorText {
    display: ${(props) => (!props.nameError ? "block" : "none")};; 
	position: absolute;
	top: 25%;
	left: 25%;
	width: 50%;
	height: 50%;
	padding: 16px;
	border: 16px solid orange;
	background-color: white;
	z-index:1002;
	overflow: auto;
  }

  & .ageErrorText{
    display: ${(props) => (!props.ageError ? "block" : "none")};; 
	position: absolute;
	top: 25%;
	left: 25%;
	width: 50%;
	height: 50%;
	padding: 16px;
	border: 16px solid orange;
	background-color: white;
	z-index:1002;
	overflow: auto;
  }
`;

const WarningMessage = props => {

    return (
        <ErrorMessage errorStatus={props.nameError && props.ageError} ageError={props.ageError} nameError={props.nameError}>
            <div className="shade">
            </div>
            <span className="nameErrorText">
                <h2>Invalid input - Name Error</h2>
                <Button type="button" onClick={props.onConfirmError}></Button>
            </span>    
            <span className="ageErrorText">
                <h2>Invalid input - Age Error</h2>
                <Button type="button" onClick={props.onConfirmError}></Button>
            </span>    
        </ErrorMessage>
    );
};

export default WarningMessage;
