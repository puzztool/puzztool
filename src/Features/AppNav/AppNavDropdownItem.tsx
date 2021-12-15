import { ReactChild } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useHref, useMatch } from "react-router";

interface Props {
  children: ReactChild | ReactChild[];
  eventKey: string;
  to: string;
}

function AppNavDropdownItem(props: Props) {
  const routeMatch = useMatch(props.to);

  return (
    <NavDropdown.Item
      active={!!routeMatch}
      eventKey={props.eventKey}
      href={useHref(props.to)}
    >
      {props.children}
    </NavDropdown.Item>
  );
}

export default AppNavDropdownItem;
