import React from 'react';
import { ResistorColorEntry as Color } from 'puzzle-lib';
import './ResistorInput.scss';

interface Props {
  bands: (Color | null)[];
}

function ResistorPicture(props: Props) {
  function getBandOffset(index: number) {
    // The tolerance band is spaced further apart than the rest of the bands
    if (index === (props.bands.length - 1)) {
      return 104;
    }

    return (18 * index) + 20;
  }

  function renderBand(index: number) {
    const band = props.bands[index];
    if (band !== null) {
      return (
        <use
          xlinkHref="#Band"
          x={getBandOffset(index)}
          fill={band.colorCode}
        />
      );
    }
  }

  return (
    <div className="ResistorPicture">
      <svg width="240" viewBox="0 0 136 40">
        <defs>
          <g id="Wire">
            <rect y="20" height="1" width="8" fill="black" />
          </g>
          <g id="Resistor">
            <rect
              y="8"
              x="8"
              width="120"
              height="24"
              rx="4"
              ry="4"
              stroke="black"
              strokeWidth="0.5"
              fill="burlywood"
            />
            <use xlinkHref="#Wire" x="0" />
            <use xlinkHref="#Wire" x="128" />
          </g>
          <g id="Band">
            <rect y="8" height="24" width="12" stroke="black" strokeWidth="0.5" />
          </g>
        </defs>
        <use xlinkHref="#Resistor" x="0" y="0" />
        {renderBand(0)}
        {renderBand(1)}
        {renderBand(2)}
        {renderBand(3)}
        {renderBand(4)}
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
}

export default ResistorPicture;
