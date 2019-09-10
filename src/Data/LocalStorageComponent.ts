import compareVersions from 'compare-versions';
import { Component } from 'react';
import LocalStorage from './LocalStorage';
import { version } from '../version';

abstract class LocalStorageComponent<P = {}, S = {}, SavedState = {}> extends Component<P, S> {
  private readonly VERSION_STORAGE_KEY: string = 'puzztoolVersion';

  public constructor(props: P) {
    super(props);

    // If the current localstorage was created with a prior version of puzztool, clear
    // the local storage to get rid of any obsolete or incompatible artifacts
    const previousVersion = LocalStorage.getObject<string>(this.VERSION_STORAGE_KEY);
    if (this.versionIncreased(previousVersion, version)) {
      LocalStorage.clear();
      // Store the current version
      LocalStorage.setObject<string>(this.VERSION_STORAGE_KEY, version);
    }
  }

  public componentDidMount() {
    this.restoreState();
    this.updateState();
  }

  protected updateState() {
    this.onUpdateState();
    this.saveState();
  }

  protected abstract getLocalStorageKey(): string;
  protected abstract onSaveState(): SavedState;
  protected abstract onRestoreState(savedState: SavedState | null): void;
  protected abstract onUpdateState(): void;

  private versionIncreased(prev: string | null, current: string): boolean {
    if (prev == null) {
      // If there's no recorded version number, this is the user's first visit
      // to the page since 0.7.0 released.  To clean up any potential legacy
      // incompatabilities, clear storage and write the version.
      return true;
    }

    return compareVersions(current, prev) === 1;
  }

  private saveState() {
    LocalStorage.setObject<SavedState>(this.getLocalStorageKey(), this.onSaveState());
  }

  private restoreState() {
    this.onRestoreState(LocalStorage.getObject<SavedState>(this.getLocalStorageKey()));
  }
}

export default LocalStorageComponent;
