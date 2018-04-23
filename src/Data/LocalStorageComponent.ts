import * as React from 'react';
import LocalStorage from './LocalStorage';

abstract class LocalStorageComponent<P = {}, S = {}, SavedState = {}> extends React.Component<P, S> {
  public componentDidMount() {
    this.restoreState();
    this.updateState();
  }

  protected updateState() {
    this.onUpdateState();
    this.saveState();
  }

  protected abstract onUpdateState(): void;
  protected abstract onSaveState(): SavedState;
  protected abstract onRestoreState(savedState: SavedState | null): void;

  private getClassName() {
    // tslint:disable-next-line:no-any
    return (this as any).constructor.name;
  }

  private saveState() {
    LocalStorage.setObject<SavedState>(this.getClassName(), this.onSaveState());
  }

  private restoreState() {
    this.onRestoreState(LocalStorage.getObject<SavedState>(this.getClassName()));
  }
}

export default LocalStorageComponent;
