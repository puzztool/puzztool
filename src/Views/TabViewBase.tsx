import LocalStorageComponent from '../Data/LocalStorageComponent';

// To inherit from this class:
// 1. import Tab from 'react-bootstrap/Tab';
// 2. import Tabs from 'react-bootstrap/Tabs';
// 3. override render() and getLocalStorageKey()
// 4. Ensure your constructor calls super()

interface Props {}

interface State {
  activeKey: number;
}

interface SavedState {
  activeKey: number;
}

abstract class TabViewBase extends LocalStorageComponent<Props, State, SavedState> {
  private _activeKey: number = 1;

  constructor(props: Props) {
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
