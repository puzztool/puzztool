import * as React from 'react';
import { FormControl } from 'react-bootstrap';
import CaesarList from './CaesarList';
import { CaesarString } from 'puzzle-lib';
import './CaesarStream.css';

type Props = {};
type State = {
  list: Array<string>,
};

class CaesarStream extends React.Component<Props, State> {
  private _str: CaesarString = new CaesarString();

  constructor(props: Props) {
    super(props);

    this.state = {
      list: this._str.getRotations(),
    };
  }

  public render() {
    return (
      <div className="CaesarStream">
        <FormControl
          className="CaesarStream-input"
          onKeyUp={(event: React.KeyboardEvent<FormControl>) => this.onKeyUp(event)}
        />
        <CaesarList list={this.state.list} />
      </div>
    );
  }

  private onKeyUp(event: React.KeyboardEvent<FormControl>) {
    const element = (event.target as HTMLInputElement);
    this._str.text = element.value;
    this.setState({
      list: this._str.getRotations(),
    });
  }
}

export default CaesarStream;
