import React from 'react';

interface Props {
  morseString: string;
}

export function renderDot() {
  return (
    <svg className="MorsePicture-dotIcon" viewBox="0 0 30 30">
      <circle cx="15" cy="15" r="15" />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
}

export function renderDash() {
  return (
    <svg className="MorsePicture-dashIcon" viewBox="0 0 90 30">
      <rect width="90" height="30" />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
}

function MorsePicture(props: Props) {
  return (
    <>
      {Array.from(props.morseString)
        .map((value: string, index: number) => (
          <span key={index}>
            {value === '.' ? renderDot() : renderDash()}
          </span>
        ))}
    </>
  );
}

export default MorsePicture;