import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Tab, Tabs } from 'react-bootstrap';
import AsciiTable from 'Conversion/Character/AsciiTable';
import OrdinalTable from 'Conversion/Character/OrdinalTable';
import LocalStorage from 'Data/LocalStorage';
import './CharacterEncodings.css';

type Props = {};
type State = {
  activeKey: number,
};

type SavedState = {
  activeKey: number,
};

class CharacterEncodings extends React.Component<RouteComponentProps<Props>, State> {
  private _activeKey: number = 1;

  constructor(props: RouteComponentProps<Props>) {
    super(props);

    this.state = {
      activeKey: this._activeKey,
    };
  }

  public componentDidMount() {
    this.restoreState();
    this.updateState();
  }

  public render() {
    return (
      <div className="CharacterEncodings">
        <div className="CharacterEncodings-content">
          <Tabs
            activeKey={this.state.activeKey}
            animation={false}
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

  private updateState() {
    this.setState({
      activeKey: this._activeKey,
    });

    this.saveState();
  }

  private saveState() {
    LocalStorage.setObject<SavedState>('CharacterEncodings', {
      activeKey: this._activeKey,
    });
  }

  private restoreState() {
    const savedState = LocalStorage.getObject<SavedState>('CharacterEncodings');

    if (savedState !== null) {
      this._activeKey = savedState.activeKey;
    }
  }

  private onTabSelect(activeKey: number) {
    this._activeKey = activeKey;
    this.updateState();
  }
}

export default CharacterEncodings;
