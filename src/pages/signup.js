import React, { useState, useContext } from "react";
import { FireBaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as Routes from "../constants/routes";
import { FooterContainer } from "../containers/footer";
import { useNavigate } from "react-router-dom";
const initialState = {
  firstName: "",
  emailAddress: "",
  password: "",
};
export default function Signup() {
  const navigate = useNavigate();
  const { firebase } = useContext(FireBaseContext);
  const [error, setError] = useState("");
  const [formInputs, setFormInputs] = useState(initialState);

  const isInvalid =
    formInputs.firstName === "" ||
    formInputs.emailAddress === "" ||
    formInputs.password === "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((oldFormInputs) => {
      return {
        ...oldFormInputs,
        [name]: value,
      };
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(firebase.auth());
    const { emailAddress, password, firstName } = formInputs;
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(Routes.BROWSE);
          })
      )
      .catch((error) => {
        setFormInputs(initialState);
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              name="firstName"
              value={formInputs.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            <Form.Input
              name="emailAddress"
              value={formInputs.emailAddress}
              onChange={handleChange}
              placeholder="Email Address"
              type="email"
            />

            <Form.Input
              name="password"
              value={formInputs.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="off"
              type="password"
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign up now.</Form.Link>
            </Form.Text>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
