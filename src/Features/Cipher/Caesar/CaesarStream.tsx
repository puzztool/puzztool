import { CaesarString } from "puzzle-lib";
import { ChangeEvent, ReactChild } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Card from "react-bootstrap/Card";
import FormControl from "react-bootstrap/FormControl";
import { connect, ConnectedProps } from "react-redux";
import { useFocusInput } from "../../../Hooks/FocusInput";
import { RootState } from "../../../Store/rootReducer";
import { clear, setText } from "./caesarCipherSlice";
import CaesarList from "./CaesarList";
import styles from "./CaesarStream.module.scss";

const mapStateToProps = (state: RootState) => ({
  text: state.cipher.caesar.text,
});
const mapDispatchToProps = {
  clear,
  setText,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {
  prompt: ReactChild | ReactChild[];
}

function CaesarStream(props: Props) {
  const inputRef = useFocusInput();

  function onClearClick() {
    props.clear();
  }

  function onTextChanged(event: ChangeEvent<HTMLInputElement>) {
    props.setText(event.currentTarget.value);
  }

  return (
    <div className={styles.container}>
      <Card className={styles.input}>
        <Card.Header>{props.prompt}</Card.Header>
        <Card.Body>
          <FormControl
            onChange={onTextChanged}
            placeholder="Text"
            ref={inputRef}
            value={props.text}
          />
          <ButtonToolbar>
            <ButtonGroup>
              <Button onClick={onClearClick} variant="danger">
                Clear
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Output</Card.Header>
        <Card.Body>
          <CaesarList list={new CaesarString(props.text).getRotations()} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default connector(CaesarStream);
