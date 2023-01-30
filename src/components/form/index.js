import React from "react";
import {
  Error,
  Submit,
  Input,
  Container,
  Base,
  Link,
  Title,
  Text,
  TextSmall,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Submit = function FormButton({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};
Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};
