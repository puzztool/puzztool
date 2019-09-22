import React, { useState } from 'react';
import { ResistorColorEntry as Color, Resistor } from 'puzzle-lib';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import ResistorColorSelector from './ResistorColorSelector';
import ResistorPicture from './ResistorPicture';
import './ResistorInput.scss';

function getResistorValue(bands: (Color | null)[]) {
  let colors: Color[] = [];
  for (let i = 0; i < (bands.length - 1); ++i) {
    if (bands[i] !== null) {
      colors.push(bands[i]!);
    }
  }

  let value = Resistor.getValue(colors);
  if (value === Resistor.INVALID_RESISTOR) {
    return 'Invalid Resistor Colors';
  } else {
    return `${Resistor.getDisplayValue(value)} \u2126 \u00b1 ${bands[bands.length - 1]!.toleranceInPercent}%`;
  }
}

function ResistorInput() {
  const initialBands = [Resistor.BLACK, Resistor.BLACK, Resistor.BLACK, null, Resistor.BROWN];
  const [value, setValue] = useState(getResistorValue(initialBands));
  const [bands, setBands] = useState(initialBands);

  function onColorChange(index: number, color?: Color) {
    let newBands = Array.from(bands);
    newBands[index] = color || null;
    setValue(getResistorValue(newBands));
    setBands(newBands);
  }

  const colorsWithValue = Resistor.colorTable.filter(color => color.hasValue());
  const colorsWithTolerance = Resistor.colorTable.filter(color => color.hasTolerance());

  return (
    <div className="ResistorInput">
      <Card className="ResistorInput-input">
        <Card.Header>Input</Card.Header>
        <Card.Body>
          <div className="ResistorInput-display">
            <ResistorPicture bands={bands} />
          </div>
          <div className="ResistorSelectors">
            <ButtonToolbar>
              <ButtonGroup>
                <ResistorColorSelector
                  index={0}
                  title="First Band"
                  colors={colorsWithValue}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={1}
                  title="Second Band"
                  colors={colorsWithValue}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={2}
                  title="Third Band"
                  colors={Resistor.colorTable}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={3}
                  title="Fourth Band"
                  colors={[new Color('None', '', 0), ...Resistor.colorTable]}
                  onChange={onColorChange}
                />
              </ButtonGroup>
              <ButtonGroup>
                <ResistorColorSelector
                  index={4}
                  title="Tolerance Band"
                  colors={colorsWithTolerance}
                  onChange={onColorChange}
                />
              </ButtonGroup>
            </ButtonToolbar>
          </div>
        </Card.Body>
      </Card>
      <Card className="ResistorInput-output">
        <Card.Header>Output</Card.Header>
        <Card.Body>
          {value}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ResistorInput;
