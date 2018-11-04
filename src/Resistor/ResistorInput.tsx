import * as React from 'react';
import { ResistorColorEntry as Color, Resistor } from 'puzzle-lib';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import './ResistorInput.css';

type Props = {
};

type State = {
  value: String,
  bands: (Color | null)[]
};

class ResistorInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const initialBands = [Resistor.BLACK, Resistor.BLACK, Resistor.BLACK, null, Resistor.BROWN];
    this.state = {
      value: this.resistorValue(initialBands),
      bands: initialBands
    };
  }

  public render() {
    return (
      <div className="ResistorInput">
        <div className="ResistorDisplay">
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
            {this.getBand(0)}
            {this.getBand(1)}
            {this.getBand(2)}
            {this.getBand(3)}
            {this.getBand(4)}
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="ResistorValue">Value: {this.state.value}</div>
        <div className="ResistorSelectors">
          <ButtonToolbar>
            {this.valueSelector(0, 'First Band')}
            {this.valueSelector(1, 'Second Band')}
            {this.multiplierSelector(2, 'Third Band')}
            {this.multiplierOrNullSelector(3, 'Fourth Band')}
            {this.toleranceSelector(4, 'Tolerance Band')}
          </ButtonToolbar>
        </div>
      </div>
    );
  }

  private getBand(index: number) {
    const band = this.state.bands[index];
    if (band !== null) {
      return (
        <use 
          xlinkHref="#Band"
          x={this.getBandOffset(index)}
          fill={band.colorCode}
        />
      );
    }
    return '';
  }

  private getBandOffset(index: number) {
      // The tolerance band is spaced further apart than the rest of the bands
      if (index === (this.state.bands.length - 1)) {
        return 104;
      }
      return (18 * index) + 20;
  }

  private valueSelector(index: number, title: String) {
    return this.colorSelector(index, title, Resistor.colorTable.filter(color => color.hasValue()));
  }

  private multiplierSelector(index: number, title: String) {
    return this.colorSelector(index, title, Resistor.colorTable);
  }

  private multiplierOrNullSelector(index: number, title: String) {
    return this.colorSelector(index, title, [new Color('None', '', 0)].concat(Resistor.colorTable));
  }

  private toleranceSelector(index: number, title: String) {
    // When puzzle-lib bug #49 is fixed, switch this to hasTolerance
    return this.colorSelector(
      index, title, 
      Resistor.colorTable.filter(color => color.toleranceInPercent !== undefined));
  }

  private colorSelector(index: number, title: String, colors: Color[]) {
    return (
      <DropdownButton
        title={title}
        key={index}
        id={`color-select-${index}`}
        // tslint:disable-next-line no-any
        onSelect={(eventKey: any) => this.updateColor(index, eventKey as string)}
      >
        {colors.map((color: Color, itemIndex: number) => {
          return (
            <MenuItem key={`${index}-${itemIndex}`} eventKey={color.name}>{color.name}</MenuItem>
          );
        })}
      </DropdownButton>
    );
  }

  private updateColor(index: number, eventKey: string) {
    let newBands = this.state.bands;
    newBands[index] = this.colorByName(eventKey);
    this.setState({
      value: this.resistorValue(newBands),
      bands: newBands
    });
  }

  private colorByName(name: String) {
    for (let color of Resistor.colorTable) {
      if (name === color.name) {
        return color;
      }
    }

    return null;
  }

  private resistorValue(bands: (Color | null)[]) {
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
}

export default ResistorInput;
