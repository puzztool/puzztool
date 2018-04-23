import KeyedCipherStreamBase from '../KeyedCipherStreamBase/KeyedCipherStreamBase';
import { AutoKeyString } from 'puzzle-lib';

type Props = {};

class AutokeyStream extends KeyedCipherStreamBase {
  constructor(props: Props) {
    super(props, new AutoKeyString());
  }
}

export default AutokeyStream;
