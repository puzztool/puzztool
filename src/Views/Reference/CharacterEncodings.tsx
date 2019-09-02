import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AsciiTable from '../../Conversion/Character/AsciiTable';
import OrdinalTable from '../../Conversion/Character/OrdinalTable';
import LocalStorageComponent from '../../Data/LocalStorageComponent';

type Props = {};
type State = {
  activeKey: number,
};

type SavedState = {
  activeKey: number,
};

class CharacterEncodings extends LocalStorageComponent<Props, State, SavedState> {
  private _activeKey: number = 1;

  constructor(props: Props) {
    super(props);

    this.state = {
      activeKey: this._activeKey,
    };
  }

  public render() {
    return (
      <div className="CharacterEncodings">
        <div className="CharacterEncodings-content">
          <Tabs
            activeKey={this.state.activeKey}
            id="CharacterEncodings-tabs"
            // tslint:disable-next-line: no-any
            onSelect={(activeKey: any) => this.onTabSelect(activeKey as number)}
          >
            <Tab eventKey={1} title="ASCII">
              <AsciiTable />
            </Tab>
            <Tab eventKey={2} title="Ordinal">
              <OrdinalTable />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'CharacterEncodings';
  }

  protected onSaveState() {
    return {
      activeKey: this._activeKey,
    };
  }

  protected onRestoreState(savedState: SavedState | null) {
    if (savedState !== null) {
      this._activeKey = savedState.activeKey;
    }
  }

  protected onUpdateState() {
    this.setState({
      activeKey: this._activeKey,
    });
  }

  private onTabSelect(activeKey: number) {
    this._activeKey = activeKey;
    this.updateState();
  }
}

export default CharacterEncodings;
