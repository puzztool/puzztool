import React from 'react';
import { SemaphoreCharacter as Character } from 'puzzle-lib';

interface Props {
  width: number;
  character: Character;
}

function getFlagAngles(character: Character) {
  const angles = {
    left: -1,
    right: -1,
  };

  const [first, second] = character.getDegrees();

  if (first !== undefined) {
    if (second === undefined) {
      if (first <= 180) {
        angles.right = first;
      } else {
        angles.left = first;
      }
    } else {
      if ((first === 0 && second <= 180) || (first <= 45 && second < 180) || (second <= 90 || first >= 270)) {
        angles.left = first;
        angles.right = second;
      } else {
        angles.right = first;
        angles.left = second;
      }
    }
  }

  return angles;
}

function SemaphorePicture(props: Props) {
  const { left, right } = getFlagAngles(props.character);

  function getLeftFlag() {
    if (left >= 0) {
      // The flag needs to be moved into position based upon the upper-left corner and then rotated around the lower-
      // left corner. There didn't appear to be a better way to handle this, so I ended up hard-coding the position
      // value and then adding the height to find the lower-left corner for the rotation origin.
      //
      // In this case the flag is currently 28 units high (in the SVG viewbox), so position it at (33, 4) and then
      // rotate around (33, 4 + 28).
      return (
        <use
          transform={`rotate(${left}, 33, 32)`}
          x="33"
          xlinkHref={left === 0 || left >= 180 ? '#LeftFlag' : '#Flag'}
          y="4"
        />
      );
    }

    return null;
  }

  function getRightFlag() {
    if (right >= 0) {
      // The flag needs to be moved into position based upon the upper-left corner and then rotated around the lower-
      // left corner. There didn't appear to be a better way to handle this, so I ended up hard-coding the position
      // value and then adding the height to find the lower-left corner for the rotation origin.
      //
      // In this case the flag is currently 28 units high (in the SVG viewbox), so position it at (43, 4) and then
      // rotate around (43, 4 + 28).
      return (
        <use
          transform={`rotate(${right}, 43, 32)`}
          x="43"
          xlinkHref={right <= 180 ? '#Flag' : '#LeftFlag'}
          y="4"
        />
      );
    }

    return null;
  }

  return (
    <svg width={props.width} viewBox="0 0 76 64">
      <defs>
        <g id="Person" fill="black">
          <circle r="3.5" cx="4" cy="4" />
          <rect y="8" width="8" height="16" rx="2" ry="2" />
        </g>
        <g id="Flag">
          <polyline strokeWidth="1" stroke="black" points="0 0, 0 20" />
          <polyline strokeWidth="2" strokeLinecap="round" stroke="black" points="0 20, 0 28" />
          <rect stroke="black" height="10" width="10" />
          <polygon fill="red" points="0 0, 10 0, 0 10" />
          <polygon fill="yellow" points="10 0, 10 10, 0 10" />
        </g>
        <g id="LeftFlag">
          <use xlinkHref="#Flag" transform="scale(-1, 1)" />
        </g>
      </defs>
      <use xlinkHref="#Person" x="34" y="23" />
      {getLeftFlag()}
      {getRightFlag()}
      Sorry, your browser does not support inline SVG.
    </svg>
  );
}

export default SemaphorePicture;
