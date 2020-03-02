import { VigenereString } from 'puzzle-lib';
import React from 'react';
import KeyedCipherStream from '../../../Common/KeyedCipherStream';

interface Props {
  prompt: JSX.Element | string;
}

function VigenereStream(props: Props) {
  return (
    <KeyedCipherStream
      cipher={new VigenereString()}
      id="VigenereStream"
      prompt={props.prompt}
    />
  );
}

export default VigenereStream;
