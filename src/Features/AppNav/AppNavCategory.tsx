import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { RouteCategory } from '../../Data/RouteData';

interface Props {
  category: RouteCategory;
}

function getCategoryDropdownId(categoryName: string) {
  return categoryName.toLowerCase().replace(/[^a-z]/, '').concat('-dropdown');
}

function NavbarCategory(props: Props) {
  const name = props.category.name;
  const rootUrl = props.category.rootUrl;

  return (
    <LinkContainer
      key={name}
      onClick={(e) => e.preventDefault()}
      to={rootUrl}
    >
      <NavDropdown
        id={getCategoryDropdownId(name)}
        title={name}
      >
        {props.category.children.map((child) => (
          <LinkContainer
            key={`${name}-${child.name}`}
            to={rootUrl + child.url}
          >
            <NavDropdown.Item eventKey={name + child.name}>
              {child.name}
            </NavDropdown.Item>
          </LinkContainer>
        ))}
      </NavDropdown>
    </LinkContainer>
  );
}

export default NavbarCategory;
