import { AutoKeyString } from 'puzzle-lib';
import React from 'react';
import KeyedCipherStream from '../KeyedCipherStream';

interface Props {
  prompt: JSX.Element | string;
}

function AutokeyStream(props: Props) {
  return (
    <KeyedCipherStream
      cipher={new AutoKeyString()}
      id="AutokeyStream"
      prompt={props.prompt}
    />
  );
}

export default AutokeyStream;
