import * as React from 'react';
import { ButtonToolbar, FormControl, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { VigenereString } from 'puzzle-lib';
import './VigenereStream.css';

type Props = {};
type State = {
  output: string,
};

class VigenereStream extends React.Component<Props, State> {
  private _str: VigenereString = new VigenereString();
  private _conversion: number = 2;

  constructor(props: Props) {
    super(props);

    this.state = {
      output: '',
    };

    this.updateState();
  }

  public render() {
    /* tslint:disable: no-any */
    return (
      <div className="VigenereStream">
        <FormControl
          className="VigenereStream-input"
          placeholder="Text"
          onKeyUp={(event: React.KeyboardEvent<FormControl>) => this.onTextChanged(event)}
        />
        <FormControl
          className="VigenereStream-input"
          placeholder="Key"
          onKeyUp={(event: React.KeyboardEvent<FormControl>) => this.onKeyChanged(event)}
        />
        <ButtonToolbar className="VigenereStream-commands">
          <ToggleButtonGroup
            type="radio"
            name="VigenereStream-conversion"
            defaultValue={this._conversion}
            onChange={(value: any) => this.onConversionChanged(value as number)}
          >
            <ToggleButton value={1}>Encrypt</ToggleButton>
            <ToggleButton value={2}>Decrypt</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        <pre className="VigenereStream-output">
          {this.state.output}
        </pre>
      </div>
    );
    /* tslint:enable: no-any */
  }

  private updateState() {
    this.setState({
      output: this._conversion === 1 ? this._str.encrypt() : this._str.decrypt(),
    });
  }

  private onTextChanged(event: React.KeyboardEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._str.text = element.value;
    this.updateState();
  }

  private onKeyChanged(event: React.KeyboardEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._str.key = element.value;
    this.updateState();
  }

  private onConversionChanged(event: number) {
    this._conversion = event;
    this.updateState();
  }
}

export default VigenereStream;
