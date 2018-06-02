import LocalStorageComponent from '../Data/LocalStorageComponent';

// To inherit from this class:
// 1. import { Tab, Tabs } from 'react-bootstrap';
// 2. override render() and getLocalStorageKey()
// 3. Ensure your constructor calls super()

type TabViewBaseProps = {};
type State = {
  activeKey: number,
};

type SavedState = {
  activeKey: number,
};

abstract class TabViewBase extends LocalStorageComponent<TabViewBaseProps, State, SavedState> {
  private _activeKey: number = 1;

  constructor(props: TabViewBaseProps) {
    super(props);

    this.state = {
      activeKey: this._activeKey,
    };
  }

  /* Classes derived from TabViewBase should implement the following functions:

  public render() {}

  protected getLocalStorageKey() {
    return 'YourClassNameHere';
  }
  */

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

  protected onTabSelect(activeKey: number) {
    this._activeKey = activeKey;
    this.updateState();
  }
}

export default TabViewBase;
