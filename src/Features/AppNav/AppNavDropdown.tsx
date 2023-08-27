import { PropsWithChildren } from "react";
import { NavDropdown } from "react-bootstrap";
import { useMatch } from "react-router";

interface Props {
  id: string;
  title: string;
  baseUrl: string;
}

function AppNavDropdown(props: PropsWithChildren<Props>) {
  const routeMatch = useMatch(props.baseUrl + "/*");

  return (
    <NavDropdown active={!!routeMatch} id={props.id} title={props.title}>
      {props.children}
    </NavDropdown>
  );
}

export default AppNavDropdown;
