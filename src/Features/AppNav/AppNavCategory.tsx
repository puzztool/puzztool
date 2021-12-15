import { RouteCategory } from "../../Data/RouteData";
import AppNavDropdown from "./AppNavDropdown";
import AppNavDropdownItem from "./AppNavDropdownItem";

interface Props {
  category: RouteCategory;
}

function getCategoryDropdownId(categoryName: string) {
  return categoryName
    .toLowerCase()
    .replace(/[^a-z]/, "")
    .concat("-dropdown");
}

function AppNavCategory(props: Props) {
  const name = props.category.name;
  const rootUrl = props.category.rootUrl;

  return (
    <AppNavDropdown
      id={getCategoryDropdownId(name)}
      key={name}
      baseUrl={rootUrl}
      title={name}
    >
      {props.category.children.map((child) => (
        <AppNavDropdownItem
          eventKey={`${name}.${child.name}`}
          to={rootUrl + child.url}
          key={`${name}-${child.name}`}
        >
          {child.name}
        </AppNavDropdownItem>
      ))}
    </AppNavDropdown>
  );
}

export default AppNavCategory;
