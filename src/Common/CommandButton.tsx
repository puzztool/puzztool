import * as React from 'react';
import './CommandButton.css';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode,
};

class CommandButton extends React.Component<Props> {
  public render() {
    return (
      <button className="CommandButton" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default CommandButton;
