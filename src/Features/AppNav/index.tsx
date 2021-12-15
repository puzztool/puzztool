import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { getCategories } from "../../Data/RouteData";
import PuzztoolBannerWhite from "../../Images/puzztool_banner_white.svg";
import AppNavCategory from "./AppNavCategory";
import AppNavDropdown from "./AppNavDropdown";
import AppNavDropdownItem from "./AppNavDropdownItem";
import styles from "./index.module.scss";

function AppNav() {
  return (
    <Navbar
      bg="dark"
      className={styles.container}
      collapseOnSelect={true}
      expand="md"
      // Remove focus from the selected element to prevent it from taking
      // further keyboard input.
      onSelect={() => (document.activeElement as HTMLElement).blur()}
      sticky="top"
      variant="dark"
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            className={styles.logo}
            src={PuzztoolBannerWhite}
            alt="PuzzTool logo"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {getCategories().map((category) => (
            <AppNavCategory key={category.name} category={category} />
          ))}
        </Nav>
        <Nav>
          <AppNavDropdown baseUrl="/help" id="help-dropdown" title="Help">
            <AppNavDropdownItem eventKey="Help.Settings" to="/help/settings">
              Settings
            </AppNavDropdownItem>
          </AppNavDropdown>
          <Nav.Link
            eventKey="Help.Feedback"
            href="https://github.com/puzztool/puzztool/issues/new"
            rel="noreferrer"
            target="_blank"
          >
            Feedback
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNav;
