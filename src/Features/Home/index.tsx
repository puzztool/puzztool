import { getCategories } from "../../Data/RouteData";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      {getCategories().map((category) => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
          <ul>
            {category.children.map((child) => (
              <li key={child.name}>
                <Link to={category.rootUrl + child.url}>{child.name}</Link> -{" "}
                {child.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Home;
