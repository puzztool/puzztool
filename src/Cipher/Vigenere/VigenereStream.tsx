import {
  default as KeyedCipherStreamBase,
  KeyedCipherStreamProps,
} from '../KeyedCipherStreamBase/KeyedCipherStreamBase';
import { VigenereString } from 'puzzle-lib';

class VigenereStream extends KeyedCipherStreamBase {
  constructor(props: KeyedCipherStreamProps) {
    super(props, new VigenereString());
  }

  protected getLocalStorageKey() {
    return 'VigenereStream';
  }
}

export default VigenereStream;
