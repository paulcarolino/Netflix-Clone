import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FireBaseContext } from "../context/firebase";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from "../constants/routes";

export default function SignIn() {
  const { firebase } = useContext(FireBaseContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This page is protected by Google reCaptcha
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
