import KeyedCipherStreamBase from '../KeyedCipherStreamBase/KeyedCipherStreamBase';
import { VigenereString } from 'puzzle-lib';

type Props = {};

class VigenereStream extends KeyedCipherStreamBase {
  constructor(props: Props) {
    super(props, new VigenereString());
  }
}

export default VigenereStream;
