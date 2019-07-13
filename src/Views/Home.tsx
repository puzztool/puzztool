import React, { Component } from 'react';
import { RouteData, RouteCategory } from '../Data/RouteData';
import { Link } from 'react-router-dom';
import './Home.scss';

class Home extends Component {
  public render() {
    return (
      <div className="Home">
        <div className="Home-content">
          {this.generateHelpText()}
        </div>
      </div>
    );
  }

  private renderCategoryChildren(category: RouteCategory) {
    return category.children.map((child) => (
      <li key={child.name}>
        <Link to={category.rootUrl + child.url}>{child.name}</Link> - {child.description}
      </li>
    ));
  }

  private generateHelpText() {
    return RouteData.getCategories().map((category) => (
      <div key={category.name}>
        <h2>{category.name}</h2>
        <p>{category.description}</p>
        <ul>
          {this.renderCategoryChildren(category)}
        </ul>
      </div>
    ));
  }
}

export default Home;
