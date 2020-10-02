import React from 'react';
import PuzzToolPage from '../../../Common/PuzzToolPage';
import AutoConvertStream from './AutoConvertStream';

function getDescription() {
  return (
    <>
      <p>
        AutoConvert will automatically detect and convert several encodings - simply enter your ciphertext.
        If all of your text is in the same encoding, you can select "force consistent encoding".
        This can be useful for ambigious strings.
      </p>
      <p>
        Some of the supported encodings are:
      </p>
      <ul>
        <li>ASCII (A=65, B=66)</li>
        <li>Five bit binary (A=00001, B=00010)</li>
        <li>Eight bit binary (A=01100001, B=01100010)</li>
        <li>Ordinal (A=1, B=2)</li>
        <li>Ternary (A=001, E=012)</li>
      </ul>
    </>
  );
}

function AutoConvert() {
  return (
    <PuzzToolPage description={getDescription()} title="AutoConvert">
      <AutoConvertStream prompt="Input" />
    </PuzzToolPage>
  );
}

export default AutoConvert;
