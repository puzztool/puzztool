import { Component } from 'react';
import LocalStorage from './LocalStorage';

abstract class LocalStorageComponent<P = {}, S = {}, SavedState = {}> extends Component<P, S> {
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

  private saveState() {
    LocalStorage.setObject<SavedState>(this.getLocalStorageKey(), this.onSaveState());
  }

  private restoreState() {
    this.onRestoreState(LocalStorage.getObject<SavedState>(this.getLocalStorageKey()));
  }
}

export default LocalStorageComponent;
