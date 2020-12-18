import { VigenereString } from 'puzzle-lib';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../Store/rootReducer';
import KeyedCipherStream from '../KeyedCipherStream';
import { clear, setConversion, setSecret, setText } from './vigenereCipherSlice';

const mapStateToProps = (state: RootState) => ({
  conversion: state.cipher.vigenere.conversion,
  secret: state.cipher.vigenere.secret,
  text: state.cipher.vigenere.text,
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

function VigenereStream(props: Props) {
  return (
    <KeyedCipherStream
      cipher={new VigenereString()}
      conversion={props.conversion}
      id="VigenereStream"
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

export default connector(VigenereStream);
