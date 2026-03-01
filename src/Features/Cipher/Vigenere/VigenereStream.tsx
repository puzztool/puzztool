import { vigenereEncrypt, vigenereDecrypt } from "puzzle-lib";
import { ReactNode } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import KeyedCipherStream from "../KeyedCipherStream";
import {
  clear,
  setConversion,
  setSecret,
  setText,
} from "./vigenereCipherSlice";

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
  prompt: ReactNode;
}

function VigenereStreamInner(props: Props) {
  return (
    <KeyedCipherStream
      encryptFn={vigenereEncrypt}
      decryptFn={vigenereDecrypt}
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

const VigenereStream = connector(VigenereStreamInner);
export default VigenereStream;
