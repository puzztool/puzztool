import * as React from 'react';
import './CommandButton.css';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  value: string,
};

class CommandButton extends React.Component<Props> {
  render() {
    return (
      <button className="CommandButton" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default CommandButton;
