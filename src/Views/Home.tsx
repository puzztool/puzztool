import * as React from 'react';
import './Home.css';
import { RouteData } from '../Data/RouteData';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <div className="Home-content">
          {this.generateHelpText()}
          </div>
      </div>
    );
  }

  private generateHelpText() {
    const categoryData = RouteData.getCategories();
    var markup = [];
    for (const category of categoryData) {
      markup.push(
        <h2>{category.name}</h2>
      );
      
      for (const child of category.children) {
        markup.push(
          (
          <li>
            <Link to={child.url}>{child.name}</Link> - {child.description}
          </li>
        )
        );
      }

    }
    return markup;
  }
}

export default Home;
