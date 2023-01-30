import React from "react";
import { Header, Profile } from "../components";
import * as Routes from "../constants/routes";
export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={Routes.HOME}
            src="/images/misc/logo.svg"
            alt="Netflix Logo"
          />
        </Header.Frame>
      </Header>

      <Profile>
        <Profile.Title>Whos Watching?</Profile.Title>
        <Profile.List>
          <Profile.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profile.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
}
