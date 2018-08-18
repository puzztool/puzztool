import * as React from 'react';

type Props = {
  morseString: String
};

class MorsePicture extends React.Component<Props> {
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

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return this.props.morseString.split('').map((value: string, index: number) => {
      return (
        <span key={index}>
        {value === '.' ? MorsePicture.renderDot() : MorsePicture.renderDash()}
        </span>
      );
    });
  }
}

export default MorsePicture;