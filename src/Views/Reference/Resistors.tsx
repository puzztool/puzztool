import * as React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import ResistorTable from '../../Resistor/ResistorTable';
import ResistorInput from '../../Resistor/ResistorInput';
import LocalStorageComponent from '../../Data/LocalStorageComponent';

type Props = {};
type State = {
  activeKey: number,
};

type SavedState = {
  activeKey: number,
};

class Resistors extends LocalStorageComponent<Props, State, SavedState> {
  private _activeKey: number = 1;

  constructor(props: Props) {
    super(props);

    this.state = {
      activeKey: this._activeKey,
    };
  }

  public render() {
    return (
      <div className="Resistors">
        <div className="Resistors-content">
          <Tabs
            activeKey={this.state.activeKey}
            animation={false}
            id="Resistors-tabs"
            // tslint:disable-next-line: no-any
            onSelect={(activeKey: any) => this.onTabSelect(activeKey as number)}
          >
            <Tab eventKey={1} title="Reference">
              <ResistorTable />
            </Tab>
            <Tab eventKey={2} title="Value">
              <ResistorInput />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

  protected getLocalStorageKey() {
    return 'Resistors';
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

export default Resistors;
