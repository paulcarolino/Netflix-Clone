import React from "react";
import { Header } from "../components";
import * as Routes from "../constants/routes";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={Routes.HOME}
          src="/images/misc/logo.svg"
          alt="NetFlix"
        />
        <Header.ButtonLink to={Routes.SIGNIN}>Sign In</Header.ButtonLink>
      </Header.Frame>

      {children}
    </Header>
  );
}
