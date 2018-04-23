import {
  default as KeyedCipherStreamBase,
  KeyedCipherStreamProps,
} from '../KeyedCipherStreamBase/KeyedCipherStreamBase';
import { AutoKeyString } from 'puzzle-lib';

class AutokeyStream extends KeyedCipherStreamBase {
  constructor(props: KeyedCipherStreamProps) {
    super(props, new AutoKeyString());
  }

  protected getLocalStorageKey() {
    return 'AutokeyStream';
  }
}

export default AutokeyStream;
