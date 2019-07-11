import React, { Component } from 'react';

type Props = {
  morseString: String
};

class MorsePicture extends Component<Props> {
  public static renderDot() {
    return (
      <svg className="MorsePicture-dotIcon" viewBox="0 0 30 30">
        <circle cx="15" cy="15" r="15" />
        Sorry, your browser does not support inline SVG.
      </svg>
    );
  }

  public static renderDash() {
    return (
      <svg className="MorsePicture-dashIcon" viewBox="0 0 90 30">
        <rect width="90" height="30" />
        Sorry, your browser does not support inline SVG.
      </svg>
    );
  }

  public render() {
    return Array.from(this.props.morseString)
      .map((value: string, index: number) => (
        <span key={index}>
          {value === '.' ? MorsePicture.renderDot() : MorsePicture.renderDash()}
        </span>
      ));
  }
}

export default MorsePicture;