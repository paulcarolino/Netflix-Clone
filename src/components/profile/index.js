import React from "react";
import { Container, Title, List, Item, Picture, Name } from "./styles/profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Profile.List = function ProfileList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Profile.Picture = function ProfilePicture({ src, ...restProps }) {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `images/misc/loading.gif`}
    />
  );
};
Profile.User = function ProfileItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

//Container is div
//ttitel is h1
//List.ul
//Name p
//Picture img
//Item is div
