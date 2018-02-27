import * as React from 'react';
import './BrailleCell.css';

type Props = {
  className: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
};

class BrailleCell extends React.Component<Props> {
  render() {
    return (
      <button className="BrailleCell" onClick={this.props.onClick}>
        <svg className={this.props.className}>
          <circle cx="50%" cy="50%" r="20%" />
          Sorry, your browser does not support inline SVG.
        </svg>
      </button>
    );
  }
}

export default BrailleCell;
