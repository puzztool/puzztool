import { ReactChild } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

interface Props {
  children: ReactChild | ReactChild[];
  eventKey: string;
  to: string;
}

function AppNavDropdownItem(props: Props) {
  return (
    <LinkContainer to={props.to}>
      <NavDropdown.Item eventKey={props.eventKey}>
        {props.children}
      </NavDropdown.Item>
    </LinkContainer>
  );
}

export default AppNavDropdownItem;
