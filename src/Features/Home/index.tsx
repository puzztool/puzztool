import { getCategories } from '../../Data/RouteData';
import { Link } from 'react-router-dom';
import './index.scss';

function Home() {
  return (
    <div className="Home">
      {getCategories().map((category) => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
          <ul>
            {category.children.map((child) => (
              <li key={child.name}>
                <Link to={category.rootUrl + child.url}>{child.name}</Link> - {child.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Home;
