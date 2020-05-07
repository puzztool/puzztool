import { AutoKeyString } from 'puzzle-lib';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../Store/rootReducer';
import KeyedCipherStream from '../KeyedCipherStream';
import { clear, setConversion, setSecret, setText } from './autokeyCipherSlice';

const mapStateToProps = (state: RootState) => ({
  conversion: state.cipher.autokey.conversion,
  secret: state.cipher.autokey.secret,
  text: state.cipher.autokey.text,
});
const mapDispatchToProps = {
  clear,
  setConversion,
  setSecret,
  setText,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {
  prompt: JSX.Element | string;
}

function AutokeyStream(props: Props) {
  return (
    <KeyedCipherStream
      cipher={new AutoKeyString()}
      conversion={props.conversion}
      id="AutokeyStream"
      secret={props.secret}
      onClear={props.clear}
      onConversionChange={props.setConversion}
      onSecretChange={props.setSecret}
      onTextChange={props.setText}
      prompt={props.prompt}
      text={props.text}
    />
  );
}

export default connector(AutokeyStream);
