import * as React from 'react';
import './CaesarList.css';

const leftPad = require('left-pad');

type Props = {
  list: Array<string>,
};

class CaesarList extends React.Component<Props> {
  public render() {
    return (
      <pre className="CaesarList">
        {this.renderListItems()}
      </pre>
    );
  }

  private renderListItems() {
    return this.props.list.map(this.renderListItem.bind(this));
  }

  private renderListItem(value: string, index: number) {
    if (index === 0) {
      return;
    }

    return (
      <div>{leftPad(index, 2)}: {value}</div>
    );
  }
}

export default CaesarList;
