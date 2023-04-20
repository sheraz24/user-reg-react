import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./UserInput.css";
import WarningMessage from "../Warning/Warning";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const UserInput = (props) => {
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [isAgeValid, setIsAgeValid] = useState("true");
  const [isNameValid, setIsNameValid] = useState("true");

  const nameInputChangeHandler = (event) => {
    //add here - what happens if there is nothing 
    if (event.target.value.trim().length > 0) {
      setIsNameValid(true);
    }
    else {
      setIsNameValid(false);
    }
    setEnteredName(event.target.value);
  };

  const namePopupHandler = (props) => {
    if (isNameValid){
       return;
    }
    else {
    //change the css here - how to do that? 
    }

  }


  const ageInputChangeHandler = (event) => {
    //add here - what happens if it is negative 
    if (event.target.value.trim().length > 0) {
      setIsAgeValid(true);
    }
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0) {
      setIsAgeValid(false);
      return;
    }
    else if (enteredName.trim().length === 0) {
      setIsNameValid(false);
      return; 
    }
    
    props.onAddGoal(enteredName);
  };

  /////////////////////////////////////////////
  
  return (
    <form onSubmit={formSubmitHandler}>

      <FormControl invalid={!isNameValid}>
        <label>Username</label>
        <input type="text" onChange={nameInputChangeHandler} />
      </FormControl>

      <FormControl invalid={!isAgeValid}>
        <label>Age (Years)</label>
        <input type="text" onChange={ageInputChangeHandler} />
      </FormControl>

      <Button type="submit">Add User</Button>

      <WarningMessage></WarningMessage>

    </form>
  );
};

export default UserInput;
