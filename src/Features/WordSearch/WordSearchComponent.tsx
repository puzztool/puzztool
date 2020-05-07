import React, { ChangeEvent } from 'react';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import { connect, ConnectedProps } from 'react-redux';
import { useFocusInput } from '../../Hooks/FocusInput';
import { RootState } from '../../Store/rootReducer';
import WordSearchOutput from './WordSearchOutput';
import {
  setCanBend,
  setGrid,
  setUseCardinals,
  setUseDiagonals,
  setWordList
} from './wordSearchSlice';
import './WordSearchComponent.scss';

const mapStateToProps = (state: RootState) => ({
  canBend: state.wordSearch.canBend,
  grid: state.wordSearch.grid,
  useCardinals: state.wordSearch.useCardinals,
  useDiagonals: state.wordSearch.useDiagonals,
  wordList: state.wordSearch.wordList,
});
const mapDispatchToProps = {
  setCanBend,
  setGrid,
  setUseCardinals,
  setUseDiagonals,
  setWordList,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>;

function WordSearchComponent(props: Props) {
  const inputRef = useFocusInput();

  function onGridTextChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    props.setGrid(event.currentTarget.value);
  }

  function onListTextChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    props.setWordList(event.currentTarget.value);
  }

  function onCardinalCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    props.setUseCardinals(event.currentTarget.checked);
  }

  function onDiagonalCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    props.setUseDiagonals(event.currentTarget.checked);
  }

  function onSetCanBendChange(event: ChangeEvent<HTMLInputElement>) {
    props.setCanBend(event.currentTarget.checked);
  }

  function renderEmptyDirection() {
    if (!props.useCardinals && !props.useDiagonals) {
      return (
        <Alert variant="warning">
          No directions are selected. No results will be shown.
        </Alert>
      );
    }
  }

  return (
    <div className="WordSearchComponent">
      <Container fluid={true}>
        <Row noGutters={true}>
          <Col md={4}>
            <Card className="WordSearchComponent-ListInput">
              <Card.Header>
                Enter the list of words to find, one word per line
              </Card.Header>
              <Card.Body>
                <FormControl
                  as="textarea"
                  onChange={onListTextChanged}
                  placeholder="Word List To Find"
                  value={props.wordList}
                />
                {renderEmptyDirection()}
                <FormCheck
                  checked={props.useDiagonals}
                  id="WordSearchComponent-checkbox-diagonal"
                  label="Use diagonal directions"
                  onChange={onDiagonalCheckboxChange}
                  type="checkbox"
                />
                <FormCheck
                  checked={props.useCardinals}
                  id="WordSearchComponent-checkbox-cardinal"
                  label="Use cardinal directions"
                  onChange={onCardinalCheckboxChange}
                  type="checkbox"
                />
                <FormCheck
                  checked={props.canBend}
                  id="WordSearchComponent-checkbox-bend"
                  label="Words can bend (may not be straight lines)"
                  onChange={onSetCanBendChange}
                  type="checkbox"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="WordSearchComponent-GridInput">
              <Card.Header>
                Enter the word search grid, one row of letters per line
              </Card.Header>
              <Card.Body>
                <FormControl
                  as="textarea"
                  onChange={onGridTextChanged}
                  placeholder="Grid Text"
                  ref={inputRef}
                  spellCheck={false}
                  value={props.grid}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col md={12}>
            <Card className="WordSearchComponent-GridOutput">
              <Card.Header>Output</Card.Header>
              <Card.Body>
                <WordSearchOutput
                  gridInputText={props.grid}
                  useCardinals={props.useCardinals}
                  useDiagonals={props.useDiagonals}
                  canBend={props.canBend}
                  wordListInputText={props.wordList}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connector(WordSearchComponent);
