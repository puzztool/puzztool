import * as React from 'react';
import { Button, ButtonGroup, ButtonToolbar, FormControl, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import LocalStorage from 'Data/LocalStorage';
import { VigenereString } from 'puzzle-lib';
import './VigenereStream.css';

type Props = {};
type State = {
  conversion: number,
  key: string,
  output: string,
  text: string,
};

type SavedState = {
  conversion: number,
  key: string,
  text: string,
};

class VigenereStream extends React.Component<Props, State> {
  private readonly _str: VigenereString = new VigenereString();
  private _conversion: number = 2;

  constructor(props: Props) {
    super(props);

    this.state = {
      conversion: 0,
      key: '',
      output: '',
      text: '',
    };
  }

  public componentDidMount() {
    this.restoreState();
    this.updateState();
  }

  public render() {
    return (
      <div className="VigenereStream">
        <FormControl
          className="VigenereStream-input"
          onChange={(event: React.FormEvent<FormControl>) => this.onTextChanged(event)}
          placeholder="Text"
          value={this.state.text}
        />
        <FormControl
          className="VigenereStream-input"
          onChange={(event: React.FormEvent<FormControl>) => this.onKeyChanged(event)}
          placeholder="Key"
          value={this.state.key}
        />
        <ButtonToolbar className="VigenereStream-commands">
          <ToggleButtonGroup
            value={this.state.conversion}
            name="VigenereStream-conversion"
            // tslint:disable-next-line: no-any
            onChange={(value: any) => this.onConversionChanged(value as number)}
            type="radio"
          >
            <ToggleButton value={1}>Encrypt</ToggleButton>
            <ToggleButton value={2}>Decrypt</ToggleButton>
          </ToggleButtonGroup>
          <ButtonGroup>
            <Button onClick={(event: React.MouseEvent<Button>) => this.onResetClick(event)}>Reset</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <pre className="VigenereStream-output">
          {this.state.output}
        </pre>
      </div>
    );
  }

  private saveState() {
    LocalStorage.setObject<SavedState>('VigenereStream', {
      conversion: this._conversion,
      key: this._str.key,
      text: this._str.text,
    });
  }

  private restoreState() {
    const savedState = LocalStorage.getObject<SavedState>('VigenereStream');

    if (savedState !== null) {
      this._str.text = savedState.text;
      this._str.key = savedState.key;
      this._conversion = savedState.conversion;
    }
  }

  private updateState() {
    this.setState({
      conversion: this._conversion,
      key: this._str.key,
      output: this._conversion === 1 ? this._str.encrypt() : this._str.decrypt(),
      text: this._str.text,
    });

    this.saveState();
  }

  private onTextChanged(event: React.SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._str.text = element.value;
    this.updateState();
  }

  private onKeyChanged(event: React.SyntheticEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._str.key = element.value;
    this.updateState();
  }

  private onConversionChanged(event: number) {
    this._conversion = event;
    this.updateState();
  }

  private onResetClick(event: React.MouseEvent<Button>) {
    this._str.key = '';
    this._str.text = '';
    this._conversion = 2;

    this.updateState();
  }
}

export default VigenereStream;
