import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../stylesheets/loginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onSubmitClick = () => {
    navigate("/shoppingCart");
  };
  return (
    <div className="LoginStyle">
      <Container>
        <h4>Welcome to SHOPPING CART</h4>
        <p>Sign In / Log In to proceed</p>
        <form onSubmit={onSubmit} className="FormStyle">
          <input
            type="text"
            value={inputName}
            onChange={handleNameChange}
            placeholder="Enter Name"
          />{" "}
          <br></br>
          <input
            type="text"
            value={inputPassword}
            onChange={handlePasswordChange}
            placeholder="Enter Password"
          />
          <br></br>
          <Button onClick={onSubmitClick}>SUBMIT</Button>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
