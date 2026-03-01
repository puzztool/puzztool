import { autokeyEncrypt, autokeyDecrypt } from "puzzle-lib";
import { ReactNode } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../Store/rootReducer";
import KeyedCipherStream from "../KeyedCipherStream";
import { clear, setConversion, setSecret, setText } from "./autokeyCipherSlice";

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
  prompt: ReactNode;
}

function AutokeyStreamInner(props: Props) {
  return (
    <KeyedCipherStream
      encryptFn={autokeyEncrypt}
      decryptFn={autokeyDecrypt}
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

const AutokeyStream = connector(AutokeyStreamInner);
export default AutokeyStream;
